import { SideMenu } from '../../components/helper'

export default function Forum() {
  const breadCrumb =[
    {title:'Forum'}
  ]
  return (
    <SideMenu breadCrumb={breadCrumb}>
        <h1 className='text-3xl'>Forum</h1>
    </SideMenu>
  )
}
