import { Alert, StyleSheet, Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import {Button, ButtonTray} from '../../Ui/button';
import Icons from '../../Ui/icons.js';


const ModuleView = ({module,onDelete}) => {
// Initialisations ---------------------
// State -------------------------------
// Handlers ----------------------------
const handleDelete=()=> onDelete(module);

const requestDelete  = () => 
Alert.alert(
'Delete Warning',
`Are you sure you want to delete module ${module.ModuleCode} ${module.ModuleName}`,

[{text:'Cancel'},{text: 'Delete ', onPress : handleDelete }]
);
// View --------------------------------
return (
<View style={styles.container}>
<FullWidthImage source={{uri : module.ModuleImage}} style={styles.image}/>

  <View style={styles.infoTray}>


 <Text style={styles.boldText}>View {module.ModuleCode}{module.ModuleName}</Text>
 <Text style= {styles.text}> Level{module.ModuleLevel}</Text>
 <Text style={styles.text}> {module.ModuleLeaderName}<Text style={styles.dimText}>(Module leader)   </Text></Text>

 
 </View>
 <ButtonTray>
<Button icon={<Icons.Edit/>}label="Modify"/>
 <Button 
 icon={<Icons.Delete/>}
 label="Delete"  onClick={requestDelete}
 styleButton={{backgroundColor:'mistyrose'}} 
 styleLabel={{color:'red'}}/>

</ButtonTray>
 </View>
   
);
};
const styles = StyleSheet.create({
  container:{
    gap:15,
  },

  text:{ 
    fontSize: 16,

  },
  boldText:{
    fontSize:16,
    fontWeight: 'bold',


  },
  dimText:{
    color:'grey',
  }
});
export default ModuleView;