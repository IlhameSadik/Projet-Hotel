package com.dailycodework.hotel.service;

import com.dailycodework.hotel.exception.*;
import com.dailycodework.hotel.model.*;
import com.dailycodework.hotel.response.*;
import com.dailycodework.hotel.service.*;
import java.util.List;

/**
 * @author Simpson Alfred
 */

public interface IBookingService {
    void cancelBooking(Long bookingId);

    List<BookedRoom> getAllBookingsByRoomId(Long roomId);

    String saveBooking(Long roomId, BookedRoom bookingRequest);

    BookedRoom findByBookingConfirmationCode(String confirmationCode);

    List<BookedRoom> getAllBookings();

    List<BookedRoom> getBookingsByUserEmail(String email);
}
