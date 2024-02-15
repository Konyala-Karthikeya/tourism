import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  packages: any;
  cartPackages: any;

  constructor(private router : Router, private service : CustomerService) {
    this.cartPackages = [];
    this.packages = [
      { id: 1001, name: "Jaipur", description: "Jaipur became known as “The Pink City” when, in 1876, Maharaja Ram Singh had most of the buildings painted pink—the color of hospitality—in preparation for a visit by Britain's Queen Victoria. Today, the city is known for its bazaars, forts, temples, palaces, and wildlife sanctuaries.", price: 21280.00, primarydestination: "Munnar, Alleppey", secondarydestination: "Munnar Spice Plantations, waterfalls, Eravikulam National Park, Mattupetty Dam, Periyar Wildlife Sanctury, Allepy Houseboat Stay, Backwaters, St.Francis Church", duration: "5 Nights/6 Days", inclusions: "Upto 3 stars,Meals,Sightseeing,Transfers,Honeymoon Freebies", imgsrc: "assets/Images/Jaipur.jpg" },
      { id: 1002, name: "Best Selling Goa Trip Package For Friends", description: "", price: 9999.00, primarydestination: "Goa", secondarydestination: "Miramar Beach, Panjim Market, Dona Paula Bay, Basilica Bon of Jesus & Se Cathedral", duration: "3 Nights/4 Days", inclusions: "Upto 3 stars ,Meals, Sightseeing, Stay Included, Transfers", imgsrc: "assets/Images/Goa.jpg" },
      { id: 1003, name: "Trendy Thailand Tour Package", description: "", price: 35000.00, primarydestination: "Thailand", secondarydestination: "Buddha Temple, lad Koh, Viewpoint, Koh samui, Wat Traimit and Wat Pho in Bangkok, Ang Thong National, Marine Park, Grand Palace, City Pillar Shrine", duration: "5 Nights/6 Days", inclusions: "Upto 3 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Australia.jpg" },
      { id: 1004, name: "Europe Tour Package in Summer", description: "", price: 136500.00, primarydestination: "Paris", secondarydestination: "Eiffel Tower, Montparnasse Tower, Mount Rigi, Mount Titlis, Gondola Ride, Zurich", duration: "5 Nights/6 Days", inclusions: "Upto 3 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Kerala.jpg" },
      { id: 1005, name: "Maldives", description: "", price: 25000.00, primarydestination: "Dubai", secondarydestination: "Dhow Cruise, Dubai Creek, Burj Khalifa, Jumeirah Beach, Palm Island, Dune Bashing", duration: "4 Nights/5 Days", inclusions: "Upto 4 stars, Meals, Sightseeing, Entry Tickets, Airport Transfers, Visa", imgsrc: "assets/Images/Maldives.jpg" },
      { id: 1006, name: "The Luxury Tales From Bali", description: "", price: 40000.00, primarydestination: "Bali", secondarydestination: "Nasa Dua Water Sports, Turtle Island, Dinner Cruise in Seminyak, Barong kintamani", duration: "6 Nights/7 Days", inclusions: "Upto 5 stars, Meals, Sightseeing, Stay Included, Transfers", imgsrc: "assets/Images/Manali.jpg" },
      { id: 1007, name: "Exotic Srilanka sightseeing Tour Package", description: "", price: 26000.00, primarydestination: "Srilanka", secondarydestination: "Kandy Lake, Pinnawala, Elephant Orphanage, Gregory Lake, Strawberry Gardens, Hakgala Botanical Garden & Nuwara Eliya Gardens, Bentota, Madhura River, Turtle Hatchery, Colombo, Galle Face Green, Viharamahadevi Park", duration: "4 Nights/5 Days", inclusions: "Upto 4 stars, Meals, Sightseeing, Stay Included, Transfers", imgsrc: "assets/Images/Paris.jpg" },
      { id: 1008, name: "Experience The Thrill of LEGOLAND and Universal Studio", description: "", price: 49000.00, primarydestination: "Singapore", secondarydestination: "Sentosa, Cable Car Ride, Universal Studios, LEGOLAND, Singapore Flyer, Night Safari, Gardens by the Bay", duration: "5 Nights/6 Days", inclusions: "Upto 4 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Telangana.jpg" },
      { id: 1009, name: "Thailand", description: "", price: 45000.00, primarydestination: "Maldives", secondarydestination: "Majeedhee Magu, Hukuru Miskiy, Old Friday Mosque, Maldives Fish Market", duration: "5 Nights/6 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Thailand.jpg" },
      { id: 1010, name: "New Zealand", description: "", price: 150000.00, primarydestination: "New Zealand", secondarydestination: "Queenstown, Milford Sound, Arrowtown, Skyline Rotorua, Maori Hangi", duration: "6 Nights/7 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Newzealand.jpg" },
      { id: 1011, name: "Gokarna ", description: "", price: 250000.00, primarydestination: "Gokarna", secondarydestination: "Yana Caves, Viboothi Falls, Murdeshwar Temple, OM Beach, Mirjan Fort", duration: "4 Nights/3 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Gokarna.jpg" },
      { id: 1012, name: "China", description: "", price: 350000.00, primarydestination: "China", secondarydestination: "Forbidden City, Imperial Palace, Li River, The Bund", duration: "6 Nights/7 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/China.jpg" },
      { id: 1013, name: "Las Vegas", description: "", price: 150000.00, primarydestination: "New Zealand", secondarydestination: "Queenstown, Milford Sound, Arrowtown, Skyline Rotorua, Maori Hangi", duration: "6 Nights/7 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Ferriswheel.jpg" },
      { id: 1014, name: "Bangkok", description: "", price: 110000.00, primarydestination: "Bangkok", secondarydestination: "Queenstown, Milford Sound, Arrowtown, Skyline Rotorua, Maori Hangi", duration: "5 Nights/4 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Bangkok.jpg" },
      { id: 1015, name: "Delhi", description: "", price: 150000.00, primarydestination: "Delhi", secondarydestination: "Queenstown, Milford Sound, Arrowtown, Skyline Rotorua, Maori Hangi", duration: "3 Nights/2 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Tajmahal.jpg" },
      { id: 1016, name: "Mysore", description: "", price: 200000.00, primarydestination: "Mysore", secondarydestination: "Queenstown, Milford Sound, Arrowtown, Skyline Rotorua, Maori Hangi", duration: "5 Nights/4 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Mysore.jpg" },
      { id: 1017, name: "New York", description: "", price: 400000.00, primarydestination: "Newyork", secondarydestination: "Queenstown, Milford Sound, Arrowtown, Skyline Rotorua, Maori Hangi", duration: "7 Nights/8 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Statueofliberty.jpg" },
      { id: 1018, name: "England", description: "", price: 250000.00, primarydestination: "England", secondarydestination: "Queenstown, Milford Sound, Arrowtown, Skyline Rotorua, Maori Hangi", duration: "8 Nights/9 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Stonehenge.jpg" },
      { id: 1019, name: "Bhopal", description: "", price: 20000.00, primarydestination: "Bhopal", secondarydestination: "Queenstown, Milford Sound, Arrowtown, Skyline Rotorua, Maori Hangi", duration: "5 Nights/4 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Minifort.jpg" },
      { id: 1020, name: "israel", description: "", price: 30000.00, primarydestination: "Israel", secondarydestination: "Queenstown, Milford Sound, Arrowtown, Skyline Rotorua, Maori Hangi", duration: "5 Nights/4 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Pilgrimage.jpg" }
    
    
    ];
    
  }
  bookNow(selectedPackage: any) {
    // Store the selected package in localStorage or a service
    localStorage.setItem('selectedPackage', JSON.stringify(selectedPackage));
    // Navigate to My Bookings component
    this.router.navigate(['mybookings']);
  }
  

//   addTomybookings(selectedPackage: any) {
//     // Clear existing bookings before adding the new one
//     this.cartPackages = [];

//     // Add the new package to bookings
//     this.cartPackages.push(selectedPackage);

//     // Store bookings in local storage
//     localStorage.setItem("cartItems", JSON.stringify(this.cartPackages));

//     // Add the package to bookings service
//     this.service.addTomybookings(selectedPackage);

//     // Navigate to mybookings page
//     this.router.navigate(['/mybookings']);
// }



}
  
