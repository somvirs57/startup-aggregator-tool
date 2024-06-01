import { SideMenu } from '../../components/helper'

export default function Educate() {
  const breadCrumb =[
    {title:'Educate'}
  ]
  return (
    <SideMenu breadCrumb={breadCrumb}>
        <h1 className='text-3xl'>Educate</h1>
    </SideMenu>
  )
}
