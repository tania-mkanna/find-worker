    package com.example.loginapp.controller;
    import com.example.loginapp.dto.LoginResponse;
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
        public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
            String email = loginData.get("email");
            String password = loginData.get("password");

            Optional<User> user = userRepo.findByEmail(email);
            if (user.isPresent() && user.get().getPassword().equals(password)) {
                return ResponseEntity.ok(
                        new LoginResponse(user.get().getId(), user.get().getFullName(), user.get().getEmail())
                );
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }


        @GetMapping("/profile/{id}")
        public ResponseEntity<?> getProfile(@PathVariable Long id) {
            Optional<User> user = userRepo.findById(id);
            return user.isPresent() ? ResponseEntity.ok(user.get()) :
                    ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        @PutMapping("/update-profile/{id}")
        public ResponseEntity<?> updateProfile(@PathVariable Long id, @RequestBody User updatedUser) {
            Optional<User> userOpt = userRepo.findById(id);
            if (userOpt.isPresent()) {
                User user = userOpt.get();
                user.setFullName(updatedUser.getFullName());
                user.setPhone(updatedUser.getPhone());
                user.setAddress(updatedUser.getAddress());
                userRepo.save(user);
                return ResponseEntity.ok("Profile updated successfully");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }