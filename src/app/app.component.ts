import { Component, HostListener } from '@angular/core'; // Gerekli Angular bileşen ve dekoratörlerini içe aktarıyor

@Component({
  selector: 'app-root', // Bu bileşen için HTML'de kullanılacak seçici
  templateUrl: './app.component.html', // Bu bileşen için kullanılacak HTML şablonu dosyası
  styleUrls: ['./app.component.css'] // Bu bileşen için geçerli olacak stil dosyası
})
export class AppComponent {
  title = 'my_netflix_app'; // Bileşenin başlık özelliği
  navbg: any; // Navbar arka plan stilini tutmak için kullanılan değişken

  /*
  Bu kod, sayfanın kaydırma durumuna bağlı olarak bir navbar'ın arka plan rengini dinamik olarak değiştiren bir Angular bileşeni tanımlar.
  Sayfa kaydırıldığında scrollover() metodu çalışır ve eğer sayfa en üstte değilse arka plan rengini siyah yapar, aksi halde şeffaf bırakır.
  */

  // Kullanıcının sayfayı kaydırmasını izleyen bir dinleyici (HostListener)
  @HostListener('document:scroll') scrollover() {
    // Sayfanın ne kadar kaydırıldığını konsola yazdırır
    console.log(document.body.scrollTop, 'scrolllength#');

    // Eğer sayfa en üstte değilse (kaydırma uzunluğu 0'dan büyükse)
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      // Navbar'ın arka plan rengini siyah olarak ayarlayan bir stil nesnesi oluşturur
      this.navbg = {
        'background-color': '#000000'
      }
    } else {
      // Eğer sayfa en üstteyse, arka plan stilini temizler (şeffaf yapar)
      this.navbg = {}
    }
  }
}
