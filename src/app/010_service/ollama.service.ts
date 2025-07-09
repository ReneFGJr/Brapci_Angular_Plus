import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OllamaService {
  //private apiUrl = 'http://localhost:11434/api/generate'; // URL da API do Ollama
  //private apiUrl = 'https://brapci.inf.br/api/generate/'
  private apiUrl = 'https://ollama.brapci.inf.br/api/generate';

  constructor(private http: HttpClient) {}

  sendMessageWithContext(message: string, context: Array<any>): Observable<any> {
    let payload = {
      model: 'brapci3.1',
      messages: context,
      options: {
        temperature: 0,
      },
      stream: false,
    };
    console.log(message)
    let url = 'https://ollama.brapci.inf.br/api/chat';
    let rsp = this.http.post(url, payload);
    return rsp;
  }

  sendMessageWithGenerate(message: string, context: string): Observable<any> {
    const payload = {
      model: 'brapci1.1', // Nome do modelo que você está usando.
      prompt: message,
      //format: 'json',
      options: {
        temperature: 0,
      },
      stream: false,
      system:
        'Responda de forma sucinta em Portugues.',
    };
    return this.http.post(this.apiUrl, payload);
  }
}

// https://ollama.brapci.inf.br/api/tags
// https://github.com/ollama/ollama/blob/main/docs/api.md#generate-a-completion
