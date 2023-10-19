export function formatDate(date: string) {
    const partes = date.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}
