/*Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para
 mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    constructor(Isbn, titulo, autor, numeroDePaginas){
        this.Isbn = Isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }
    get mostrarIsbn(){
        return this.Isbn;
    }
    get mostrarTitulo(){
        return this.titulo;
    }
    get mostrarAutor(){
        return this.autor;
    }
    get mostrarNumeroDePaginas(){
        return this.numeroDePaginas;
    }
    set modificarIsbn(nuevoIsbn){
        this.Isbn = nuevoIsbn;
    }
    set modificarTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }
    set modificarAutor(nuevoAutor){
        this.autor = nuevoAutor;
    }
    set modificarNumeroDePaginas(nuevoNumeroDePaginas){
        this.numeroDePaginas = nuevoNumeroDePaginas;
    }
    mostrarLibro(){
        document.write(`<ul>
        <li>El libro ${this.mostrarTitulo} con ISBN ${this.mostrarIsbn} creado por el autor ${this.mostrarAutor} tiene páginas ${this.mostrarNumeroDePaginas}
        </li></ul>`);
        
    }
}

let libro1 = new Libro(1234567891011, 'Reino Animal', 'Millie Marotta', 100);
libro1.modificarIsbn =222120191817
libro1.modificarAutor ='Tom Clancy'
libro1.modificarTitulo = 'En la mira'
libro1.modificarNumeroDePaginas = 450
libro1.mostrarLibro();


let libro2 = new Libro(1110987654321, 'La caza del octubre rojo', 'Tom Clancy', 500);
libro2.mostrarLibro();

if(libro1.mostrarNumeroDePaginas > libro2.mostrarNumeroDePaginas){
    document.write(`El libro ${libro1.mostrarTitulo} posee mas paginas que el libro ${libro2.mostrarTitulo}`);
}else{
    document.write(`El libro ${libro2.mostrarTitulo} posee mas paginas que el libro ${libro1.mostrarTitulo}`);
}

