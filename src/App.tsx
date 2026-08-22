import { useTranslation } from '@/features/i18n';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ textAlign: 'center', padding: 40 }}>
      <h1>{t('app.title')}</h1>

      <p style={{ color: '#888' }}>{t('app.tagline')}</p>

      <button
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        }
        style={{
          marginTop: 24,
          padding: '8px 16px',
          border: '1px solid #333',
          borderRadius: 8,
          background: '#1a1a1a',
          color: '#aaa',
          cursor: 'pointer',
        }}
      >
        {i18n.language.toUpperCase()}
      </button>
    </div>
  );
}

export default App;
