// app/test-slug/[slug]/page.tsx
export async function generateStaticParams() {
  return [{ slug: 'test1' }, { slug: 'test2' }];
}

// Define a simple Props type locally
type TestPageProps = {
  params: {
    slug: string;
  };
};

export default function TestSlugPage({ params }: TestPageProps) {
  return (
    <div>
      <h1>Test Slug Page</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
