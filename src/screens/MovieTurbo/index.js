import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native'
import CustomHeader from '../../components/customHeader/CustomHeader'
import { fetchMovieList } from '../../services/api'
import { Rating, AirbnbRating } from 'react-native-ratings';

const MovieTurbo = () => {

    const [movieList, setmovieList] = useState([])

    useEffect(() => {
        fetchMovieList().then(res => {
            if (res.data.movies?.length) {
                setmovieList(prevList =>
                    prevList?.length ?
                        [...prevList, res.data.movies] :
                        [...res.data.movies]
                )
                console.log("movies", res.data.movies)
            }
        }).catch(err => {
            console.log('error', err)
        })
    }, [])

    const _renderGenre = (data) => {
        // {item?.genres?.map}
        return data?.length ? data?.map((item, _index) => item + (data?.length - 1 === _index ? '' : ' | ')) : ''
    }

    const _render = ({ item, index }) => {
        return <View
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.37,
                shadowRadius: 2.0,

                elevation: 12,
                margin: 10,
                width: '95%',
                borderWidth: 0.2,
                borderRadius: 6
            }}>
            <View style={{
                flexDirection: 'row',
                height: 180,
                overflow: 'hidden',

            }}>
                <View style={{
                    flex: 0.4
                }}>
                    <Image
                        style={{
                            flex: 1
                        }}
                        source={{ uri: item?.medium_cover_image }}
                    />
                </View>
                <View style={{
                    flex: 0.6,
                    justifyContent: 'space-between',
                    padding: 16
                }}>
                    <Text style={{
                        fontSize: 24,
                    }}>{item?.title}</Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <AirbnbRating
                            count={5}
                            defaultRating={item.rating / 2}
                            isDisabled={true}
                            size={20}
                        />
                    </View>

                    <Text style={{
                        color: '#3f8ae4',

                    }}>
                        {_renderGenre(item?.genres)}
                    </Text>
                </View>
            </View>
        </View>

    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <CustomHeader title='Movie Turbo' />
            <FlatList
                data={movieList || []}
                keyExtractor={(_, index) => index.toString()}
                renderItem={_render}
            />

        </View>

    );
}

export default MovieTurbo;