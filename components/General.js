import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Button, FlatList} from 'react-native';
import Modal from './Modal';


const General = () => {
    // Declaración de los useStates a usar
    const [inputText, setInputText] = useState ('');
    const [itemList, setItemList] = useState ([]);
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState (false);
    const [tareaRealizadaList, setTareaRealizadaList] = useState([]);
    
    
    // Función handleChangText
    const handleChangeText = (text) => setInputText(text);

    // Inicio Función handleAddItem
    const handleAddItem = () => {
        setItemList ([
            ...itemList,
            {
                id: Math.random().toString(),
                value: inputText,
            },
        ]);
        setInputText('');
    }
    // Inicio Función handleAddItem

    // Inicio Función handleModal
    const handleModal = id => {
        setItemSelected (itemList.find(item => item.id === id));
        setModalVisible (true);
    }
    // FIn Función handleModal

    // Inicio Función handleConfirmDelete
    const handleConfirmDelete = () => {
        const id=itemSelected.id;
        setItemList (itemList.filter (item => item.id !==id))
        setModalVisible(false);
        setItemSelected({});
    }
    // Inicio Función handleConfirmDelete

    // Función handleCheck
    const handleCheck = id => {
        setItemList (itemList.filter (item => item.id !==id));
        setTareaRealizadaList ([
            ...tareaRealizadaList,
            {
                id: Math.random().toString(),
                value: (itemList.find(item => item.id === id)).value,
            },
        ]);
    }

    



    return (
        <>
        <View style={styles.screen}> 
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Tarea a realizar"
                style= {styles.input}
                onChangeText={handleChangeText}
                value={inputText}
                />
                <Button title='ADD'
                onPress = {handleAddItem}
                />
            </View>
            {/* FlatList para renderizar las tareas que voy agregando */}
            <FlatList
            data={itemList}
            renderItem = {
                data => {
                    return (
                        <>
                        
                        <View style = {styles.itemContainer}>
                            {/* Botón para determinar que la tarea ya fue realizada */}
                            <Text onPress = {() => handleCheck (data.item.id)} style={styles.realizadoButton}>✓</Text>
                            <Text style={styles.textItem}>
                                {data.item.value}
                            </Text>
                            {/* Botón para eliminar la tarea */}
                            <Text onPress ={() => handleModal (data.item.id)} style={styles.xEliminar}>✗</Text>
                        
                        </View>
                        </>
                    );
                    
                }
            }
            keyExtractor={item => item.id}
            />
            {/* Utilizo Modal propio desarrollado en Modal.js */}
            <Modal
            visible={modalVisible}
            handleConfirmDelete={handleConfirmDelete}
            itemSelected={itemSelected}
            />
            <Text>Tareas realizadas:</Text>
             <FlatList
            data={tareaRealizadaList}
            renderItem = {
                data => {
                    return (
                        <>
                        <View style = {styles.itemCheck}>
                            
                            <Text style={styles.textItem}>
                                {data.item.value}
                            </Text>
                            
                        
                        </View>
                        
                        
                        </>
                    );
                    
                }
            }
            keyExtractor={item => item.id}
            />
        </View>
        
        
        </>
    )
}

const styles = StyleSheet.create ({
screen: {
    padding: 30,
    marginTop:30
},
inputContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical: 15
},
input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width:200
},

itemContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 6,
    padding: 15,
    margin: 5,
    backgroundColor: 'white',
    
},
textItem: {
    fontSize: 16
},
realizadoButton: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 3,
    backgroundColor: 'green',
    color: 'white',
    paddingRight: 3,
    paddingLeft: 5
},
itemCheck: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 6,
    padding: 15,
    margin: 5,
    backgroundColor: '#d9ed92'
},
xEliminar: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 3,
    backgroundColor: 'red',
    color: 'white',
    paddingRight: 3,
    paddingLeft: 5
}

});

export default General;