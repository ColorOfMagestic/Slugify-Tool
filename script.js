const input = document.querySelector('.input');
const output = document.querySelector('.output');
const buttonGenerate = document.querySelector('.button-generate');
const buttonCopy = document.querySelector('.button-copy');

function slugify(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

buttonGenerate.addEventListener('click', () => {
  const value = input.value;
  output.textContent = slugify(value);
});

buttonCopy.addEventListener('click', async () => {
  const text = output.textContent;
  if (text) {
    try {
      await navigator.clipboard.writeText(text);
      alert('Скопировано в буфер обмена!');
    } catch (err) {
      alert('Ошибка при копировании');
    }
  } else {
    alert('Сначала сгенерируйте текст');
  }
});