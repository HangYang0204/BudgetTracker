import { StyleSheet, SectionList, SectionListData, View, Text } from 'react-native'
import React from 'react'

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export type Section = SectionListData<Expense,{sectionName: string}>;

export const sections: Section[] = [
    {
        sectionName:'Week 1 of March',
        data:[
            {ExpenseId: 1, ExpenseName: 'Lunch'},
            {ExpenseId: 2, ExpenseName: 'Dinner'},
            {ExpenseId: 3, ExpenseName: 'Entertainment'},
            {ExpenseId: 4, ExpenseName: 'Breakfast'},
            {ExpenseId: 5, ExpenseName: 'Transit'},
            {ExpenseId: 6, ExpenseName: 'Other'},
        ],
    },
    {
        sectionName:'Week 2 of March',
        data:[
            {ExpenseId: 7, ExpenseName: 'Lunch'},
            {ExpenseId: 8, ExpenseName: 'Dinner'},
            {ExpenseId: 9, ExpenseName: 'Entertainment'},
            {ExpenseId: 10, ExpenseName: 'Breakfast'},
            {ExpenseId: 11, ExpenseName: 'Transit'},
            {ExpenseId: 12, ExpenseName: 'Other'},
        ],
    },
]

const ExpenseList = () => {
return (
    <View style={style.container}>
    <SectionList
    sections={sections}
    renderItem={({item}) => (
        <Text style={style.item}>{item.ExpenseId} {item.ExpenseName}</Text>
    )}
    renderSectionHeader={({section}) => <Text style={style.sectionHeader}>{section.sectionName}</Text>}
    //keyExtractor={item => `basicListEntry-${item}`}
    />
    </View>
)
}

export default ExpenseList