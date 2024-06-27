import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

interface Props {
    leftTitle: string
    rigthTitle: string
    onLeftPress(): void 
    onRightPress(): void
}

const FormNavigator: FC<Props> = ({leftTitle, rigthTitle, onLeftPress, onRightPress}) => {
  return <View style={styles.container}>
    <Pressable onPress={onLeftPress}>
        <Text style={styles.title}>{leftTitle}</Text>
    </Pressable>
    <Pressable onPress={onRightPress}>
        <Text style={styles.title}>{rigthTitle}</Text>
    </Pressable>
  </View>;
 }
 
 const styles = StyleSheet.create({
   container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   title:{
    color: colors.primary
   }
}) 
  
export default FormNavigator; 