import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  packages: any;
  cartProducts: any;

  constructor(private router: Router) {
    this.cartProducts = [];
    this.packages = [
      { id: 1001, name: "Jaipur", description: "Jaipur became known as “The Pink City” when, in 1876, Maharaja Ram Singh had most of the buildings painted pink—the color of hospitality—in preparation for a visit by Britain's Queen Victoria. Today, the city is known for its bazaars, forts, temples, palaces, and wildlife sanctuaries.", price: 21280.00, primarydestination: "Munnar, Alleppey", secondarydestination: "Munnar Spice Plantations, waterfalls, Eravikulam National Park, Mattupetty Dam, Periyar Wildlife Sanctury, Allepy Houseboat Stay, Backwaters, St.Francis Church", duration: "5 Nights/6 Days", inclusions: "Upto 3 stars,Meals,Sightseeing,Transfers,Honeymoon Freebies", imgsrc: "assets/Images/Jaipur.jpg" },
      { id: 1002, name: "Best Selling Goa Trip Package For Friends", description: "", price: 9999.00, primarydestination: "Goa", secondarydestination: "Miramar Beach, Panjim Market, Dona Paula Bay, Basilica Bon of Jesus & Se Cathedral", duration: "3 Nights/4 Days", inclusions: "Upto 3 stars ,Meals, Sightseeing, Stay Included, Transfers", imgsrc: "assets/Images/Goa.jpg" },
      { id: 1003, name: "Trendy Thailand Tour Package", description: "", price: 35000.00, primarydestination: "Thailand", secondarydestination: "Buddha Temple, lad Koh, Viewpoint, Koh samui, Wat Traimit and Wat Pho in Bangkok, Ang Thong National, Marine Park, Grand Palace, City Pillar Shrine", duration: "5 Nights/6 Days", inclusions: "Upto 3 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Australia.jpg" },
      { id: 1004, name: "Europe Tour Package in Summer", description: "", price: 136500.00, primarydestination: "Paris", secondarydestination: "Eiffel Tower, Montparnasse Tower, Mount Rigi, Mount Titlis, Gondola Ride, Zurich", duration: "5 Nights/6 Days", inclusions: "Upto 3 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Kerala.jpg" },
      { id: 1005, name: "Delightful Dubai Tour", description: "", price: 25000.00, primarydestination: "Dubai", secondarydestination: "Dhow Cruise, Dubai Creek, Burj Khalifa, Jumeirah Beach, Palm Island, Dune Bashing", duration: "4 Nights/5 Days", inclusions: "Upto 4 stars, Meals, Sightseeing, Entry Tickets, Airport Transfers, Visa", imgsrc: "assets/Images/Maldives.jpg" },
      { id: 1006, name: "The Luxury Tales From Bali", description: "", price: 40000.00, primarydestination: "Bali", secondarydestination: "Nasa Dua Water Sports, Turtle Island, Dinner Cruise in Seminyak, Barong kintamani", duration: "6 Nights/7 Days", inclusions: "Upto 5 stars, Meals, Sightseeing, Stay Included, Transfers", imgsrc: "assets/Images/Manali.jpg" },
      { id: 1007, name: "Exotic Srilanka sightseeing Tour Package", description: "", price: 26000.00, primarydestination: "Srilanka", secondarydestination: "Kandy Lake, Pinnawala, Elephant Orphanage, Gregory Lake, Strawberry Gardens, Hakgala Botanical Garden & Nuwara Eliya Gardens, Bentota, Madhura River, Turtle Hatchery, Colombo, Galle Face Green, Viharamahadevi Park", duration: "4 Nights/5 Days", inclusions: "Upto 4 stars, Meals, Sightseeing, Stay Included, Transfers", imgsrc: "assets/Images/Paris.jpg" },
      { id: 1008, name: "Experience The Thrill of LEGOLAND and Universal Studio", description: "", price: 49000.00, primarydestination: "Singapore", secondarydestination: "Sentosa, Cable Car Ride, Universal Studios, LEGOLAND, Singapore Flyer, Night Safari, Gardens by the Bay", duration: "5 Nights/6 Days", inclusions: "Upto 4 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Telangana.jpg" },
      // { id: 1009, name: "Stunning Maldives Holiday Tour Package", description: "", price: 45000.00, primarydestination: "Maldives", secondarydestination: "Majeedhee Magu, Hukuru Miskiy, Old Friday Mosque, Maldives Fish Market", duration: "5 Nights/6 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Thailand.jpg" },
      // { id: 1010, name: "Magical New Zealand tour package", description: "", price: 150000.00, primarydestination: "New Zealand", secondarydestination: "Queenstown, Milford Sound, Arrowtown, Skyline Rotorua, Maori Hangi", duration: "6 Nights/7 Days", inclusions: "Upto 5 stars, Flights, Meals, Sightseeing, Transfers", imgsrc: "assets/Images/Udaipur.jpg" }
    ];
  }

  addToCart(packages: any) {
    this.router.navigate(['/package', packages.id]);
  }
}
  
