import SimpleForm from '@/components/simple'
import RHF from '@/components/rhf'
import RHFZod from '@/components/rhf-zod'
import WithAction from '@/components/with-action'

export default function Home() {
  return (
    <section className='flex justify-center py-24'>
      <div className='container'>
        <h1 className='mb-16 text-2xl font-medium'>React Hook Forms</h1>
        <WithAction />
      </div>
    </section>
  )
}
