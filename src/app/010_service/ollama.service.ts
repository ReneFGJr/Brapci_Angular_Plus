import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OllamaService {
  //private apiUrl = 'http://localhost:11434/api/generate'; // URL da API do Ollama
  private apiUrl = 'https://brapci.inf.br/api/generate'

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const payload = {
      model: 'brapci1.1', // Nome do modelo que você está usando
      prompt: message,
      stream: false,
    };
    return this.http.post(this.apiUrl, payload);
  }
}
