import { Component, OnInit } from '@angular/core';
import { OrdersServiceService } from 'src/app/Services/orders-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public username = localStorage.getItem('s_username');


  orders: any[] = [];
  order:any
  cartDetails: any;
  bookings: any;
complete:any[] = [];
Delivering:any[] = [];

pageSize = 10;
currentPage = 1;

  constructor(private orderService: OrdersServiceService) { }



  public selector( id:any){
    this.orderService.getOrderById(id).subscribe((booking: any) =>{
      this.order = booking.data;
      this.cartDetails = this.order.attributes.cartDetails;
      console.log(this.cartDetails, "order items")
    })
  }

  tab: string = 'order';

  setTab(tab: string){
    this.tab = tab;
  }

  ngOnInit(): void {
  this.orderService.getOrders().subscribe((booking: any) => {
    console.table(booking.data);
    this.orders = booking.data.filter((order: any) => order.attributes.status === "Approved");
    this.complete = booking.data.filter((order: any) => order.attributes.status === "Completed");
    this.Delivering = booking.data.filter((order: any) => order.attributes.status === "Delivering");
    console.log(this.orders, "pending Approval");
    console.log(this.complete,"completed")
    console.log(this.Delivering,"Delivering")


  });
console.log(this.username,"driver")
  }




  approveItem(booking: any) {
    const id = booking.id;
    const status = 'Delivering';
    const driver = this.username
    const index = this.orders.findIndex((r: any) => r.id === booking.id);
    console.log(index);

    this.orderService.updateItemStatus(id, status, driver).subscribe(
      (res) => {
        console.log(res, 'see console');
        window.location.reload();
      },
      (err) => {
        console.error(err);
      }
    );
  }



}
