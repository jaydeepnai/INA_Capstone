import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";

export default ServiceList = (props) => {
    
    
    return (
        <SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#FFFFFF",
					paddingTop: 20,
					paddingBottom: 171,
					paddingHorizontal: 24,
				}}>

				<View 
					style = {{
						width: 364,
						height: 122,
						marginBottom: 24,
					}}>
					<View 
						style = {{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 24,
							paddingHorizontal: 15,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 13,
							}}>
							{"ADOPTION"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 11,
								width: 334,
							}}>
							{"Our NGO is dedicated to facilitating animal \nadoption, connecting compassionate individuals \nwith rescue animals in search of loving homes."}
						</Text>
					<Image
          source={require("../../../assets/NGOanimated.png")}
          resizeMode="contain"
          style={{
            borderRadius: 10,
            height: 50,
            width: 50,
          }}
        />
					</View>
				</View>
				<View 
					style = {{
						width: 364,
						height: 122,
						marginBottom: 21,
					}}>
					<View 
						style = {{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 26,
							paddingHorizontal: 17,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 11,
							}}>
							{"FUND RAISING"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 11,
								width: 330,
							}}>
							{"We offers fund-raising services to gather vital\nresources for impactful projects, empowering\ncommunities and fostering positive change."}
						</Text>
					</View>
					<View 
						style = {{
							position: "absolute",
							bottom: -13,
							right: -15,
							width: 147,
							height: 146,
							borderColor: "#5E27FD",
							borderWidth: 1,
						}}>
					</View>
				</View>
				<View 
					style = {{
						width: 364,
						height: 122,
						marginBottom: 13,
					}}>
					<View 
						style = {{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 23,
							paddingHorizontal: 17,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 13,
							}}>
							{"HEALTHCARE"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 11,
								width: 330,
							}}>
							{"NGOs are ensuring access to medical care, \npreventive programs, and health education \nfor underserved communities."}
						</Text>
					</View>
					<View 
						style = {{
							position: "absolute",
							bottom: -5,
							right: -12,
							width: 136,
							height: 126,
							borderColor: "#5E27FD",
							borderWidth: 1,
						}}>
					</View>
				</View>
				<View 
					style = {{
						width: 364,
						height: 122,
						marginBottom: 13,
					}}>
					<View 
						style = {{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 24,
							paddingHorizontal: 21,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 12,
							}}>
							{"SKILL DEVELOPMENT"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 11,
								width: 322,
							}}>
							{"Our NGO offers training programs that equip \nindividuals with practical skills for employment \nand entrepreneurship"}
						</Text>
					</View>
					<View 
						style = {{
							position: "absolute",
							bottom: -5,
							right: -12,
							width: 136,
							height: 126,
							borderColor: "#5E27FD",
							borderWidth: 1,
						}}>
					</View>
				</View>
				<View 
					style = {{
						width: 364,
						height: 122,
						marginBottom: 24,
					}}>
					<View 
						style = {{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 24,
							paddingHorizontal: 15,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 13,
							}}>
							{"ADOPTION"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 11,
								width: 334,
							}}>
							{"Our NGO is dedicated to facilitating animal \nadoption, connecting compassionate individuals \nwith rescue animals in search of loving homes."}
						</Text>
					</View>
					<View 
						style = {{
							position: "absolute",
							bottom: -5,
							right: -12,
							width: 136,
							height: 126,
							borderColor: "#5E27FD",
							borderWidth: 1,
						}}>
					</View>
				</View>
				<View 
					style = {{
						width: 364,
						height: 122,
						marginBottom: 21,
					}}>
					<View 
						style = {{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 26,
							paddingHorizontal: 17,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 11,
							}}>
							{"FUND RAISING"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 11,
								width: 330,
							}}>
							{"We offers fund-raising services to gather vital\nresources for impactful projects, empowering\ncommunities and fostering positive change."}
						</Text>
					</View>
					<View 
						style = {{
							position: "absolute",
							bottom: -13,
							right: -15,
							width: 147,
							height: 146,
							borderColor: "#5E27FD",
							borderWidth: 1,
						}}>
					</View>
				</View>
				<View 
					style = {{
						width: 364,
						height: 122,
						marginBottom: 14,
					}}>
					<View 
						style = {{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 23,
							paddingHorizontal: 17,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 13,
							}}>
							{"HEALTHCARE"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 11,
								width: 330,
							}}>
							{"NGOs are ensuring access to medical care, \npreventive programs, and health education \nfor underserved communities."}
						</Text>
					</View>
					<View 
						style = {{
							position: "absolute",
							bottom: -5,
							right: -12,
							width: 136,
							height: 126,
							borderColor: "#5E27FD",
							borderWidth: 1,
						}}>
					</View>
				</View>
				<View 
					style = {{
						width: 364,
						height: 122,
					}}>
					<View 
						style = {{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 23,
							paddingHorizontal: 21,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 12,
							}}>
							{"SKILL DEVELOPMENT"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 11,
								width: 322,
							}}>
							{"Our NGO offers training programs that equip \nindividuals with practical skills for employment \nand entrepreneurship"}
						</Text>
					</View>
					<View 
						style = {{
							position: "absolute",
							bottom: -4,
							right: -12,
							width: 136,
							height: 126,
							borderColor: "#5E27FD",
							borderWidth: 1,
						}}>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}