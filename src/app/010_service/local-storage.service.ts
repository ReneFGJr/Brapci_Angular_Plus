import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  /**
   * Salva um valor no localStorage.
   * @param key Chave para armazenar o valor.
   * @param value Valor a ser armazenado (qualquer tipo).
   * @returns Retorna `true` se o valor foi armazenado com sucesso.
   */
  set<T>(key: string, value: T): boolean {
    if (this.storage) {
      try {
        const serializedValue =
          typeof value === 'string' ? value : JSON.stringify(value);
        this.storage.setItem(key, serializedValue);
        return true;
      } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
        return false;
      }
    }
    return false;
  }

  /**
   * Recupera um valor do localStorage.
   * @param key Chave do valor a ser recuperado.
   * @returns O valor armazenado ou `null` se não encontrado.
   */
  get<T>(key: string): T | null {
    if (this.storage) {
      try {
        const storedValue = this.storage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
      } catch (error) {
        console.error('Erro ao recuperar do localStorage:', error);
        return null;
      }
    }
    return null;
  }

  /**
   * Remove um item do localStorage.
   * @param key Chave do item a ser removido.
   * @returns Retorna `true` se o item foi removido.
   */
  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  /**
   * Limpa todo o localStorage.
   * @returns Retorna `true` se o armazenamento foi limpo.
   */
  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
