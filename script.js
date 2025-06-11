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
  const text = slugify(value);
  output.textContent = `http://109.206.161.111/lander/${text}/index.php#`;
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