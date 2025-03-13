import { View, Text } from 'react-native'
import React from 'react'
import ExpenseList from '@/components/ExpenseList'

const search = () => {
  return (
    <View className="flex-1 mt-5">

        <ExpenseList/>
      
    </View>
  )
}

export default search