import React from 'react';
import { StyleSheet, Modal, Text, View, Button } from 'react-native';

const ModalPersonalizado = ({itemSelected, handleConfirmDelete, visible}) => {
    return (
        <>
        <Modal
        animationType='slide'
        visible={visible}
        transparent
        >
        <View style={styles.modal}>
        <View style={styles.contentModal}>
        <Text style={styles.text}>Se borrara la tarea "{itemSelected.value}"</Text>
         {/* Botón para confirmar eliminar tarea */}
        <Button onPress={handleConfirmDelete} title='Confirmar'></Button>
        </View>
        
        </View>

        </Modal>

        </>
    )
}

const styles = StyleSheet.create({
modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
},
contentModal: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    padding: 40,
    backgroundColor: '#f2f2f2'
},
text: {
    paddingBottom: 10
}
});

export default ModalPersonalizado;