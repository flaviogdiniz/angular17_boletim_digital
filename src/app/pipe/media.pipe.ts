import { Pipe, PipeTransform } from '@angular/core';
import { Aluno } from '../modelo/Aluno';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  transform(objeto:Aluno): number {
    return (objeto.nota1 + objeto.nota2)/2;
  }

}
