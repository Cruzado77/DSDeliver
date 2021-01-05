package com.devsuperiorcruzado77.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperiorcruzado77.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}
