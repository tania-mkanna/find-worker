    package com.example.loginapp.controller;
    import com.example.loginapp.repository.UserRepository;
    import com.example.loginapp.model.User;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.util.HashMap;
    import java.util.Map;
    import java.util.Optional;


    @RestController   // handling rest requests and return JSON or text
    @RequestMapping("/api/auth")  //set a base path for all the methods
    @CrossOrigin(origins = "http://localhost:3000")// adjust if needed

    public class UserController {

        @Autowired
        private UserRepository userRepo;

        @PostMapping("/signup")
        public ResponseEntity<String> signup(@RequestBody User user) {
            Optional<User> existing = userRepo.findByEmail(user.getEmail());
            if (existing.isPresent()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already in use");
            }
            userRepo.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
        }

        @PostMapping("/login")
        public ResponseEntity<String> login(@RequestBody Map<String, String> loginData) {
            String email = loginData.get("email");
            String password = loginData.get("password");

            Optional<User> user = userRepo.findByEmail(email);
            if (user.isPresent() && user.get().getPassword().equals(password)) {

                //new

                Map<String, Object> response = new HashMap<>();
                response.put("id", user.get().getId());
                response.put("fullName", user.get().getFullName());  
                response.put("email", user.get().getEmail());
                return ResponseEntity.ok(response.toString());

                //
//                return ResponseEntity.ok("Login successful");
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }