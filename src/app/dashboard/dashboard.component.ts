import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';


interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {
  }

  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.initCharts();
  }
   setCookie(name, value, days) {
    // Set the cookie with the given name, value, and expiration time (in days)
    let expires = '';
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }
  
   getCookie(name) {
    // Get the value of the cookie with the given name
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  //  removeCookie(name) {
  //   // Remove the cookie with the given name
  //   setCookie(name, '', -1); // Set the cookie with an expiration time of -1 days
  // }
  
//   document.getElementById('close').addEventListener('click', function(){
//     // Get the persistence value
//     let persistence = document.getElementById('banner').getAttribute('data-persistence');
//     if (persistence === 'true') {
//       // If persistence is enabled, set a cookie to remember that the banner is closed
//       setCookie('bannerClosed', 'true', 1); // Set the cookie with an expiration time of 1 day
//     } else {
//       removeCookie('bannerClosed')
//     }
//     document.getElementById('banner').style.display = 'none'; // Hide the banner
//   });
  
//   window.addEventListener('load', function() {
//     // Check if the banner should be displayed or not
//     let bannerClosed = getCookie('bannerClosed');
//     if (bannerClosed === 'true') {
//       // If the bannerClosed cookie is set, hide the banner
//       document.getElementById('banner').style.display = 'none';
//     }
//   });
  
// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function showSlide(n) {
//   slides[currentSlide].classList.remove('slide-active');
//   currentSlide = (n + slides.length) % slides.length;
//   slides[currentSlide].classList.add('slide-active');
// }

// const previousSlideButton = document.querySelector('#previous-slide');
// previousSlideButton.addEventListener('click', () => {
//   showSlide(currentSlide - 1);
// });

// const nextSlideButton = document.querySelector('#next-slide');
// nextSlideButton.addEventListener('click', () => {
//   showSlide(currentSlide + 1);
// });

}
