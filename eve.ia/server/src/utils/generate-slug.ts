export function generateSlug(text: string): string {
    return text
        .normalize('NFD') // Decompor diacríticos
        .replace(/[\u0300-\u036f]/g, '') // Remover caracteres diacríticos
        .toLowerCase() // Converte todo o texto para minúsculas
        .replace(/[^\w\s-]/g, '') // Remove caracteres especiais, exceto espaços e hifens
        .replace(/\s+/g, '-') // Substitui espaços em branco por hifens
        .replace(/--+/g, '-') // Remove hifens duplicados
        .replace(/^-+/, '') // Remove hifens no início
        .replace(/-+$/, ''); // Remove hifens no final
}
















