import { Button } from '@/components/ui/button'; // assume shadcn

export default function Home() {
  return (
    <div className='min-h-screen bg-zinc-950 text-white p-8'>
      <h1 className='text-5xl font-bold'>Car Snap Customizer 🚗</h1>
      <p>Snap → Customize your ride realistically</p>
      <Button onClick={() => alert('Camera open!')}>📸 Snap My Car</Button>
      {/* Tabs and preview mock here */}
      <div>Exterior Tab | Interior | 3D Preview Canvas</div>
      {/* More UI ... */}
    </div>
  );
}