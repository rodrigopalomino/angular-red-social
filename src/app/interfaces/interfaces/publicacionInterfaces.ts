export interface Publicacion {
  post_id?: number;
  user_id: number;
  name?: string;
  titulo: string;
  contenido: string;
  cantidad_likes?: number;
  cantidad_dislikes?: number;
  cantidad_comentarios?: number;
  username?: string;
  createdAt?: string;
  usuario?: any;
}
