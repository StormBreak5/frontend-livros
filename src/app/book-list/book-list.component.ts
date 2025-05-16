import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

interface Book {
  nome: string;
  autor: string;
  editora: string;
  isbn: string;
  dataLancamento: Date;
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  searchField: 'nome' | 'autor' | 'editora' | 'isbn' = 'nome';
  searchTerm: string = '';
  books: Book[] = [
    {
      nome: 'Angular para Iniciantes',
      autor: 'João da Silva',
      editora: 'Tech Editora',
      isbn: '978-3-16-148410-0',
      dataLancamento: new Date('2024-04-10')
    },
    {
      nome: 'TypeScript Avançado',
      autor: 'Maria Oliveira',
      editora: 'DevBooks',
      isbn: '978-1-23-456789-0',
      dataLancamento: new Date('2023-09-15')
    },
    {
      nome: 'Introdução ao JavaScript',
      autor: 'Carlos Mendes',
      editora: 'CodeBooks',
      isbn: '978-0-12-345678-9',
      dataLancamento: new Date('2022-01-20')
    },
    {
      nome: 'Node.js na Prática',
      autor: 'Ana Souza',
      editora: 'Backend Press',
      isbn: '978-9-87-654321-0',
      dataLancamento: new Date('2021-11-05')
    },
    {
      nome: 'Clean Code',
      autor: 'Robert C. Martin',
      editora: 'Prentice Hall',
      isbn: '978-0-13-235088-4',
      dataLancamento: new Date('2008-08-11')
    },
    {
      nome: 'Padrões de Projetos',
      autor: 'Erich Gamma',
      editora: 'Addison-Wesley',
      isbn: '978-0-201-63361-0',
      dataLancamento: new Date('1994-10-21')
    },
    {
      nome: 'O Programador Pragmático',
      autor: 'Andrew Hunt',
      editora: 'Addison-Wesley',
      isbn: '978-0-201-61622-4',
      dataLancamento: new Date('1999-10-20')
    },
    {
      nome: 'Refatoração',
      autor: 'Martin Fowler',
      editora: 'Addison-Wesley',
      isbn: '978-0-201-48567-7',
      dataLancamento: new Date('1999-07-08')
    },
    {
      nome: 'Design de APIs',
      autor: 'Flávio Almeida',
      editora: 'Casa do Código',
      isbn: '978-85-5519-123-4',
      dataLancamento: new Date('2018-03-10')
    },
    {
      nome: 'Vue.js Essencial',
      autor: 'Igor Rafael',
      editora: 'WebDev',
      isbn: '978-85-3333-222-1',
      dataLancamento: new Date('2020-06-01')
    },
    {
      nome: 'React do Zero',
      autor: 'Lucas Nascimento',
      editora: 'Frontend Pro',
      isbn: '978-85-9876-543-2',
      dataLancamento: new Date('2021-02-25')
    },
    {
      nome: 'Dominando Python',
      autor: 'Juliana Figueiredo',
      editora: 'Code Master',
      isbn: '978-85-2222-444-4',
      dataLancamento: new Date('2019-09-14')
    },
    {
      nome: 'Estruturas de Dados com C',
      autor: 'Paulo Henrique',
      editora: 'Lógica Editora',
      isbn: '978-85-5555-111-2',
      dataLancamento: new Date('2017-01-01')
    },
    {
      nome: 'Algoritmos em Java',
      autor: 'Sérgio Lima',
      editora: 'Tech BR',
      isbn: '978-85-0000-000-0',
      dataLancamento: new Date('2016-05-30')
    },
    {
      nome: 'Java Web Moderno',
      autor: 'Renata Borges',
      editora: 'DevBooks',
      isbn: '978-85-4444-666-1',
      dataLancamento: new Date('2022-07-20')
    },
    {
      nome: 'Desenvolvimento Android',
      autor: 'Eduardo Ramos',
      editora: 'Mobile Press',
      isbn: '978-85-8765-432-1',
      dataLancamento: new Date('2020-12-10')
    },
    {
      nome: 'Swift para iOS',
      autor: 'Fernanda Silva',
      editora: 'Apple Dev',
      isbn: '978-85-3210-987-6',
      dataLancamento: new Date('2019-03-05')
    },
    {
      nome: 'Machine Learning Essencial',
      autor: 'Roberta Dias',
      editora: 'AI Books',
      isbn: '978-85-7654-321-0',
      dataLancamento: new Date('2021-10-15')
    },
    {
      nome: 'Data Science na Prática',
      autor: 'Daniel Costa',
      editora: 'Big Data Press',
      isbn: '978-85-6543-210-9',
      dataLancamento: new Date('2022-02-08')
    },
    {
      nome: 'Banco de Dados Relacionais',
      autor: 'Gustavo Almeida',
      editora: 'DB Editora',
      isbn: '978-85-5432-109-8',
      dataLancamento: new Date('2018-08-20')
    },
    {
      nome: 'Segurança da Informação',
      autor: 'Patrícia Souza',
      editora: 'Cyber Press',
      isbn: '978-85-4321-098-7',
      dataLancamento: new Date('2023-01-10')
    },
    {
      nome: 'Redes de Computadores',
      autor: 'Marco Aurélio',
      editora: 'InfraTech',
      isbn: '978-85-3210-876-5',
      dataLancamento: new Date('2017-04-12')
    }
  ];

  filteredBooks(): Book[] {
    const term = this.searchTerm.toLowerCase().trim();
    const field = this.searchField;
    return this.books.filter(book => {
      const value = (book[field] as string)?.toLowerCase() || '';
      return value.includes(term);
    });
  }
}
