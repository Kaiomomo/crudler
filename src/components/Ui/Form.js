import { StyleSheet, Text,TextInput, View } from "react-native";
import {Picker} from '@react-native-picker/picker'
import { Button, ButtonTray }  from './button.js';
import Icons  from './icons.js';



const Form =({children, onSubmit, onCancel,submitLabel,submitIcon})=>{
//inisilation----------------
//State--------------
//Handlers---------
//View-----------
return ( 
    <View style = {styles.formContainer}>

        <View style={styles.formItems}>{children}</View>

<ButtonTray>
            <Button label ={submitLabel} icon={submitIcon} onClick={onSubmit}/>
            <Button label ="Cancel" icon ={<Icons.Close/>}onClick={onCancel}/>

  </ButtonTray>

    </View>
)

};

const InputText = ({label,value, onChange})=>{
//Inisitiliatioin 
//State----------
//Handlers---------
//vIEW------------
return (


    <View style={styles.item}>
    <Text style={styles.itemLabel} >{label}</Text>
    <TextInput 
    value ={value} 
    onChangeText={onChange} 
    style={styles.itemTextInput}
    />
    </View>



);

};



const InputSelect = ({label,prompt, options, value, onChange})=>{
    //Inisitiliatioin 
    //State----------
    //Handlers---------
    //vIEW------------

    return (
    
    
        <View style={styles.item}>
        <Text style={styles.itemLabel} >{label}</Text>
       <Picker
       
       mode="dropdown"
       selectedValue={value}
       onValueChange={onChange} 
       style={styles.itemPickerStyle}

       >
        <Picker.Item value={null} label= {prompt} style= {styles.itemPickerPromptStyle}/>

        { options.map((option,index)=> (   <Picker.Item key={index} value= {option.value} label= {option.label}/>)
      )  }
       </Picker>
        </View>
    );
    
    };

//Compose components 
Form.InputText = InputText;
Form.InputSelect = InputSelect;



//Styles 

const styles = StyleSheet.create ({
    formContainer:{
        gap:10,
    },
    formItems:{
        gap:7,

    },

    itemLabel: {
        color: 'grey',
        fontSize: 16,
        marginBottom: 5,
      
      },
      itemTextInput:{
      height: 50,
      paddingLeft:10,
      fontSize: 16, 
      backgroundColor:'white',
      borderRadius:7,
      borderWidth: 1,
      borderColor: 'lightgray',
      
      
      },

        itemPickerStyle: {
            height: 80,
            backgroundColor: 'whitesmoke',
            justifyContent: 'center',
            

        },
        itemPickerPromptStyle:{
            height:70,
            
            color:'red',

        },



});
export default Form;