import { useForm, useWatch } from "react-hook-form";
import { Input, CheckboxRadio, Select, Textarea } from '../../component/FormElement';
import { useEffect, useState } from "react";
import axios from 'axios';

function ReactHookForm() {

    const {
        register,
        handleSubmit,
        getValues,
        control,
        formState: { errors },
    } = useForm({
        mode: 'onTouched',
    });
    const watchForm = useWatch({
        control,
    })

    const [addressData, setAddressData] = useState([]);

    useEffect(() => {
        // console.log(getValues('city')); // 可以使用 getValues 取得所有、特定值
        // console.log('表單 watch:', getValues());
        
        // 或是使用 setValues 寫入值
    }, [watchForm,getValues]); // 將新變數傳入

    useEffect(() => {
        (async() => {
            const res = await axios.get('./assets/taiwan.json');
            // console.log(res);
            setAddressData(res.data);

        })()
    },[])

    const onSubmit = (data) => {
        console.log('表單成功送出:',data);
        // const { name, email, tel, address } = data;

    };

    return (
        <>
            <div className='pt-5'>
                <form className='col-md-6 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className='p-4'>
                        <p className="text-danger">npm install react-hook-form</p>
                        <h4 className='fw-bold'>表單資料</h4>
                        <div className='mb-2'>
                            <Input
                                id='email'
                                labelText='Email'
                                type='email'
                                errors={errors}
                                register={register}
                                rules={{
                                    required: 'Email 為必填',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Email 格式不正確',
                                    },
                                }}
                            ></Input>
                        </div>
                        <div className='mb-2'>
                            <Input
                                id='name'
                                type='text'
                                errors={errors}
                                labelText='使用者名稱'
                                register={register}
                                rules={{
                                    required: '使用者名稱為必填',
                                    minLength: {
                                        value: 2,
                                        message: '使用者名稱長度不少於 2',
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: '使用者名稱長度不超過 10',
                                    },
                                }}
                            ></Input>
                        </div>
                        <div className='mb-2'>
                            <Input
                                id='tel'
                                labelText='電話'
                                type='tel'
                                errors={errors}
                                register={register}
                                rules={{
                                    required: '電話為必填',
                                    minLength: {
                                        value: 6,
                                        message: '電話不少於 6 碼'
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: '電話不超過 12 碼'
                                    }
                                }}
                            ></Input>
                        </div>
                        <div className='mb-2'>
                            <Select id='city'
                                labelText='縣市'
                                errors={errors}
                                register={register}
                                rules={{
                                required: '縣市為必填'
                            }}>
                                <option value="">請選擇縣市</option>
                                {addressData.map((city) => {
                                    return <option value={city.CityName} key={city.CityEngName}>{city.CityName}</option>
                                })}
                            </Select>
                        </div>
                        <div className='mb-2'>
                            <Select id='district'
                                labelText='鄉鎮市區'
                                errors={errors}
                                register={register}
                                disabled={!getValues('city')}
                                rules={{
                                required: '鄉鎮市區為必填'
                            }}>
                                <option value="">請選擇鄉鎮市區</option>
                                {
                                    addressData.find((city) => city.CityName === getValues('city'))
                                    ?.AreaList?.map((area) => {
                                        return <option value={area} key={area.AreaName}>{area.AreaName}</option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className='mb-2'>
                            <Input
                                id='address'
                                labelText='地址'
                                type='address'
                                errors={errors}
                                register={register}
                                rules={{
                                    required: '地址為必填',
                                }}
                            ></Input>
                        </div>
                        <div className='mb-2'>
                            <Input
                                id='date'
                                labelText='日期'
                                type='date'
                                errors={errors}
                                register={register}
                                rules={{
                                    required: '日期為必填',
                                    validate: (value) => {
                                        // console.log('日期:', value);
                                        // return '日期有誤';
                                    }
                                }}
                            ></Input>
                        </div>
                        <div className='mb-3'>
                            <div className='form-label'>素食者</div>
                            <CheckboxRadio
                                type='radio'
                                name='isVegetarian'
                                id='vegetarian'
                                value={true}
                                register={register}
                                errors={errors}
                                rules={{ required: '請選擇是否吃素' }}
                                labelText="是"
                            ></CheckboxRadio>
                            <CheckboxRadio
                                type='radio'
                                name='isVegetarian'
                                id='non-vegetaria'
                                value={false}
                                register={register}
                                errors={errors}
                                rules={{ required: '請選擇是否吃素' }}
                                labelText="否"
                            ></CheckboxRadio>
                        </div>
                        <div className='mb-3'>
                            <div className='form-label'>您喜歡哪些運動</div>
                            <CheckboxRadio
                                type='checkbox'
                                name='hobby'
                                id='hobbyBasketball'
                                value={'籃球'}
                                register={register}
                                errors={errors}
                                rules={{ required: true }}
                                labelText="籃球"
                            ></CheckboxRadio>
                            <CheckboxRadio
                                type='checkbox'
                                name='hobby'
                                id='hobbyTennis'
                                value={'網球'}
                                register={register}
                                errors={errors}
                                rules={{ required: true }}
                                labelText="網球"
                            ></CheckboxRadio>
                        </div>
                        <div className='mb-2'>
                            <Textarea
                                id='textarea'
                                labelText='留言'
                                type='textarea'
                                rows={5}
                                cols={1}
                                errors={errors}
                                register={register}
                                rules={{
                                    // required: '留言為必填',
                                }}
                            ></Textarea>
                        </div>
                        <div className='mb-3'>
                            <CheckboxRadio
                                type='checkbox'
                                name='isCheckForm'
                                id='isCheckForm'
                                value={true}
                                register={register}
                                errors={errors}
                                rules={{ required: true }}
                                labelText="確認同意本文件"
                            ></CheckboxRadio>
                        </div>
                    </div>
                    <div className='d-flex mt-4 justify-content-center align-items-md-center align-items-end w-100'>
                        <button
                            type='submit'
                            className='btn btn-dark py-3 px-7 rounded-0'
                        >
                            送出表單
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ReactHookForm;