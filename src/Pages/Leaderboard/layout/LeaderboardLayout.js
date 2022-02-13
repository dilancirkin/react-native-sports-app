import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import styles from './LeaderboardLayout.styles';
import LeaderCard from '../../../Components/LeaderCard';

const LeaderboardLayout = () => {
  const renderLeaderList = ({item}) => <LeaderCard user={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={charactersData}
        renderItem={renderLeaderList}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default LeaderboardLayout;
