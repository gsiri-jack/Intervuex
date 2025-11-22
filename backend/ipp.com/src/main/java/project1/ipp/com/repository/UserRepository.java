package project1.ipp.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project1.ipp.com.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
