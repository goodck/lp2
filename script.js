document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('entry-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('エントリーありがとうございます！\n担当よりご連絡します。');
    form.reset();
  });
});
