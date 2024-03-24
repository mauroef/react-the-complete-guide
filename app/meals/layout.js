import MainHeader from '@/components/main-header/main-header';

export default function MealsLayout({ children }) {
  return (
    <>
      <MainHeader />
      <div>
        <p>Meals layout</p>
        {children}
      </div>
    </>
  );
}
