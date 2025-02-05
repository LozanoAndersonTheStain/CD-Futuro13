import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../../interfaces/testimonial.interface';

@Component({
  selector: 'app-fathers',
  imports: [CommonModule],
  templateUrl: './fathers.component.html',
  styleUrls: ['./fathers.component.scss']
})
export class FathersComponent implements OnInit {
  fathers: Testimonial[] = [
    { name: 'Mike', description: 'Padre de Sebatian Suarez sub 12 y de Lucas Suarez sub 10', imageUrl: 'assets/img_carousel/image_1.jpg', testimonial: 'Mis hijos han mejorado mucho desde que se unieron al club no solo en el deporte sino también en su vida personal.'},
    { name: 'Samite', description: 'Madre de Daniel Samora sub 12 y de Camila Samora sub 10', imageUrl: 'assets/img_carousel/image_2.jpg', testimonial: 'Estoy muy agradecida con el club por la formación que le han dado a mis hijos y por la confianza que han tenido.'},
    { name: 'Hashi', description: 'Padre de Daniel Duran sub 12 y de Felipe Duran sub 10', imageUrl: 'assets/img_carousel/image_3.jpg', testimonial: 'El club ha sido una gran influencia para mis hijos, no solo en el ámbito deportivo, sino también en su desarrollo como personas.'},
    { name: 'Kaity', description: 'Padre de Sebatian Hernandez sub 12 y de Juan Hernandez sub 10', imageUrl: 'assets/img_carousel/image_4.jpg', testimonial: 'Ver a mis hijos crecer y mejorar en el deporte que aman ha sido una experiencia increíble. Gracias al club por su dedicación.'},
    { name: 'Lauren', description: 'Padre de Samara Duarte sub 12 y de Stefania Duarte sub 10', imageUrl: 'assets/img_carousel/image_5.jpg', testimonial: 'El club ha sido un segundo hogar para mis hijas. Han aprendido valores como el trabajo en equipo y la disciplina.'},
    { name: 'Ryan', description: 'Padre de Santiago Torres sub 12', imageUrl: 'assets/img_carousel/image_6.jpg', testimonial: 'Mi hijo ha encontrado en el club un lugar donde puede desarrollarse tanto deportiva como personalmente. Estoy muy contento con su progreso.'},
    { name: 'Dakes', description: 'Padre de Cristian Lopez sub 12', imageUrl: 'assets/img_carousel/image_7.jpg', testimonial: 'El club ha sido fundamental en el crecimiento de mi hijo. Ha aprendido a ser más responsable y comprometido.'}
  ];

  currentFatherIndex = Math.floor(this.fathers.length / 2);

  updateCurrentFather(index: number): void {
    this.currentFatherIndex = index;
  }

  ngOnInit(): void {}
}
