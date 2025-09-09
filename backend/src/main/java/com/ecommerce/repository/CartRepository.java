package com.ecommerce.repository;

import com.ecommerce.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long> {

    @Query("SELECT c From Cart c Where c.user.id = :userId")
    Cart findByUserId(@Param("userId") Long userId);

    // ✅ New method with JOIN FETCH to also load cartitems in one query
    @Query("SELECT c FROM Cart c LEFT JOIN FETCH c.cartitems WHERE c.user.id = :userId")
    Cart findByUserIdWithItems(@Param("userId") Long userId);
}