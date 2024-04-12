import { useEffect, useState } from "react"
import { useForm,  } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import Modal from "components/modal"
import {Button,Spinner,TextInput} from 'components/ui'
import './styles.scss'

import { selectOrder } from 'features/Order/orderSlice/orderSlice'
import { OrderThunk } from 'features/Order/orderSlice/thunk'

const OrderCard = ({ selectProducts }) => {

    const {loading,order} = useSelector(selectOrder)

    const [isOpen,setIsOpen] = useState(false)
  
    const dispatch = useDispatch()
 
    const {
      control,
      handleSubmit,
      reset,
      formState:{isValid}
    } = useForm()
  


    const onSubmit = (data) => {

      if(!Object.keys(selectProducts).length) return;
    
      const MutationproductData = {
        phone:data.number.replaceAll(/[^\d\+]/g,"").replaceAll("+",""),
        cart:Object.entries(selectProducts)?.map(item => {
          if(!!item?.[0] && !!item?.[1]?.selectProductCost){
            return {
              id:+item?.[0],
              quantity:item?.[1]?.selectProductCost / item?.[1]?.price 
            }
          }
      })
      }

      dispatch(OrderThunk(MutationproductData))
      reset()
    }


   useEffect(() => {
    if(order?.success && !loading){
      setIsOpen(true)
    }
   },[loading,order?.success])

  return (
      <>
        <div className='order-card'>
            <h2>Добавленные товары</h2>
            <table>
                <tbody>
                    {
                        Object.entries(selectProducts)?.map((item,index) => (
                            <>
                          {!!item?.[0] && !!item?.[1]?.selectProductCost && 
                              <tr key={index}>
                                <td>товар {item?.[0]}</td>
                                <td>x{item?.[1]?.selectProductCost / item?.[1]?.price }     {item?.[1]?.selectProductCost}₽</td>
                              </tr>}
                            </>
                        ))
                    }
                </tbody>
            </table>
          <div className='order-card__form'>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <TextInput
                        placeholder="+7 (___) ___ __-__" 
                        control={control}
                        name='number'
                        rules={{
                            required: true,
                            minLength:18
                        }}
                        order={order?.success}
                    />
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      className="order-button" 
                      disabled={!isValid || loading || !Object.keys(selectProducts).length}
                    >
                    {loading ? <Spinner/>
                    :
                    "заказать"
                    }
                  </Button>
              </form>
          </div>
        </div>
        {isOpen && 
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          content="Заказ был успешен" 
         />}
      </>
  )
}

export default OrderCard