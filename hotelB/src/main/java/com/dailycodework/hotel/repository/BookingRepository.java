package com.dailycodework.hotel.repository;

import com.dailycodework.hotel.exception.*;
import com.dailycodework.hotel.model.*;
import com.dailycodework.hotel.response.*;
import com.dailycodework.hotel.service.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * @author Simpson Alfred
 */

public interface BookingRepository extends JpaRepository<BookedRoom, Long> {

    List<BookedRoom> findByRoomId(Long roomId);

 Optional<BookedRoom> findByBookingConfirmationCode(String confirmationCode);

    List<BookedRoom> findByGuestEmail(String email);
}
