package com.example.loginapp.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

//this class holds important security config
@Configuration

//activate spring security
public class SecurityConfig {

    @Bean
    public SecurityFilterCain securityFilterChain(com.example.loginapp.security.HttpSecurity http) throws Exception {

        return http

                //  Define which requests need authentication
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/signup", "/api/auth/login").permitAll() // signup + login are open
                        .anyRequest().authenticated() // everything else requires login
                )

                //  Define form login (Spring’s default login page)
                .formLogin(form -> form
                        .loginPage("/login")   // your custom login page (if you have one)
                        .permitAll()
                )

                //  Logout is allowed for everyone
                .logout(logout -> logout.permitAll())

                .build();
    }




}
