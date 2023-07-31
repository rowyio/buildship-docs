import PageNotFound from '../components/PageNotFound';

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <PageNotFound />
    </div>
  );
}
