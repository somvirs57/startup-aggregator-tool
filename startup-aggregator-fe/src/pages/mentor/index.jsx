import { SideMenu } from '../../components/helper'

export default function Mentor() {
  const breadCrumb =[
    {title:'Mentor'}
  ]
  return (
    <SideMenu breadCrumb={breadCrumb}>
        <h1 className='text-3xl'>Mentor</h1>
    </SideMenu>
  )
}
