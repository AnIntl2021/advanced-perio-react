# Client Guide: Open Dental Chatbot Integration

This document explains in clear, non-technical terms how the Chatbot integration works, how your clinic manages it, and how your data is protected.

---

## 1. How the Bot Books Appointments (Step-by-Step)

When a patient interacts with the Chatbot on your website or messaging platform, the system communicates in real-time with your Open Dental database to complete the booking.

```
[Patient on Bot] ➔ [Identify Patient] ➔ [Check Live Availability] ➔ [Confirm Slot] ➔ [Write directly to Open Dental Scheduler]
```

### The 4-Step Process:
1. **Patient Identification:** 
   * The bot asks the patient for their First Name, Last Name, and Date of Birth.
   * It instantly searches your Open Dental database. If the patient already exists, it matches them. If not, it creates a new patient record in your Open Dental system.
2. **Real-Time Availability Check:**
   * The bot requests open time slots. It checks your clinic's schedules, provider hours, and available chairs (operatories) dynamically.
3. **Choosing the Slot:**
   * The patient selects an available time (e.g., Thursday at 10:30 AM) directly in the chat interface.
4. **Instant Booking:**
   * The bot books the appointment. It immediately appears on your Open Dental schedule grid, complete with the patient's name, assigned provider, chair, and a note indicating it was booked via the Chatbot.

---

## 2. How the Clinic Controls the Bot (Calendar & Availability)

Your clinic staff retains **100% control** over what days and times are available to patients. You do not need to manage a separate calendar system; the chatbot reads your live Open Dental configuration automatically.

* **Regular Working Hours:** The bot only shows slots during the working hours defined for your providers (Dentists/Hygienists) in Open Dental.
* **Lunch Breaks & Staff Meetings:** If staff create a **"Blockout"** (colored block on the schedule grid) for lunch, meetings, or training, the bot immediately hides those slots from patients.
* **Holidays & Days Off:** If the clinic is closed on a holiday or a provider is on vacation, no slots will be offered for those dates.
* **Chair Availability:** The bot checks if an operatory (chair) is available. If all your chairs are already booked at a specific time, the bot will not offer that time, preventing double-bookings.

---

## 3. Frequently Asked Questions (FAQ)

### Q1: Will the bot double-book appointments?
**No.** The integration queries your live schedule in real-time before displaying options to the patient. If a slot gets booked by your front desk staff, that slot is instantly removed from the chatbot's options.

### Q2: What happens if a patient cancels or changes an appointment inside the clinic?
Your system is kept in perfect synchronization. If your front desk staff reschedules or cancels a chatbot-booked appointment directly in the Open Dental software, a notification is sent to our system. The chatbot will know the change occurred instantly.

### Q3: What happens when a new patient uses the bot?
If a patient's name and date of birth do not match any existing records, the bot will collect their basic details (phone, email) and automatically create a **New Patient Profile** inside your Open Dental system before scheduling their appointment.

### Q4: Is our patient data secure?
**Yes, absolutely.** 
* The integration does **not** have direct access to your local MySQL database.
* Instead, it communicates via Open Dental's official **Remote API** through a secure utility called **eConnector** installed on your database server.
* All data transmissions are encrypted using industry-standard HTTPS.
* Open Dental enforces strict permissions on what data the API can read and write.

---

## 4. Launch Setup Checklist for the Clinic

To activate this integration, your clinic will need to complete these three simple steps:

1. **Activate API eService:**
   * Contact Open Dental Support and subscribe to **API eServices** (required to enable cloud access).
2. **Verify eConnector Service:**
   * Ensure the Open Dental **eConnector** utility is running on your database server (Open Dental support can assist with this during activation).
3. **Generate Customer Key:**
   * In your Open Dental software, navigate to **Setup > Advanced Setup > API**.
   * Generate a **Customer Key** for our integration and provide it to us securely. This acts as the secure passcode allowing our bot to talk to your clinic's schedule.
