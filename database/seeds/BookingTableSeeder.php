<?php

use App\Bookable;
use App\Booking;
use Illuminate\Database\Seeder;

class BookingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        \App\Bookable::all()->each(function (Bookable $bookable) {
            $booking = factory(Booking::class)->make();
            $bookings = collect([$booking]);

            for ($i = 0; $i < random_int(1, 20); $i++) {
                $from = (clone $booking->to)->addDays(random_int(1, 14));
                $to = (clone $from)->addDays(random_int(0, 14));

                $booking = Booking::make([
                    'from' => $from,
                    'to' => $to,
                    'price' => random_int(1500, 60000)
                ]);
                $bookings->push($booking);
            }
            $bookable->bookings()->saveMany($bookings);
        });
    }
}
