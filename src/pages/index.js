import React from "react";
import theme from "theme";
import { Theme, Em, Span, Link, Text, Box, Image, Strong, Input, Hr } from "@quarkly/widgets";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Section height="100vh" background="url(http://j-p-g.net/if/2020/09/09/0758792001599665641.png) 100% 0%/contain no-repeat,linear-gradient(0deg, #000000, #000000)" md-transform="rotateY(0deg)" md-min-height="542px">
			<Override slot="SectionContent" md-justify-content="start" md-align-items="center" />
			<Stack margin="50px -16px -16px -16px" md-align-self="flex-start" md-margin="0 -16px 85px -16px" md-width="100%">
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Link href="#" text-decoration-line="initial" color="#fff" font="600 29px/35px --fontFamily-googleMontserrat">
						Land
						<Span
							color="--secondary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Em>
								ing
							</Em>
						</Span>
						{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						margin="0px 40px 0px 0px"
					>
						PRODUCTS
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						margin="0px 40px 0px 0px"
					>
						ABOUT
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						margin="0px 40px 0px 0px"
					>
						BLOG
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
					>
						CONTACT
					</Link>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-display="block">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						margin="0px 40px 0px 0px"
						md-width="24px"
						md-height="17px"
						md-background="rgba(0, 0, 0, 0) url(https://svgshare.com/getbyhash/sha1-NBzVKGPx/WOJeftMzGzknL+QsBY=) 0% 0% /cover no-repeat scroll padding-box"
						md-margin="0px 0 0px 0px"
					/>
					{"        "}{"    "}
				</StackItem>
			</Stack>
			<Box
				width="50%"
				margin="100px 0px 0px 0"
				md-margin="20px 0px 0px 0"
				md-width="100%"
				md-display="flex"
				md-flex-direction="column"
				md-align-items="center"
				lg-margin="70px 0px 0px 0"
			>
				<Text
					color="#fff"
					font="600 60px/74px --fontFamily-googleArvo"
					margin="16px 0px 74px 0px"
					lg-margin="16px 0px 50px 0px"
					md-text-align="center"
					md-margin="16px 0px 36px 0px"
					sm-font="600 37px/44px --fontFamily-googleArvo"
				>
					Universal Music Group and Brands{"\n\n"}
				</Text>
				<Link
					href="#"
					color="#fff"
					text-decoration-line="initial"
					font="bold 12px/15px --fontFamily-googleMontserrat"
					letter-spacing="2.4px"
					width="172px"
					height="43px"
					display="flex"
					text-align="center"
					background="--color-btn"
					border-radius="100px"
					align-items="center"
					justify-content="center"
				>
					LEARN MORE{"\n\n"}
				</Link>
			</Box>
		</Section>
		<Section height="100%">
			<Override slot="SectionContent" justify-content="center" align-items="center" lg-width="100%" />
			<Box margin="110px 0px 60px 0px">
				<Text font="bold 12px/15px --fontFamily-googleMontserrat" letter-spacing="2.4px" color="--h3Type" text-align="center">
					AWESOME FEATURE{"\n\n"}
				</Text>
				<Text font="500 36px/48px --fontFamily-googleArvo" text-align="center" sm-font="500 30px/48px --fontFamily-googleArvo">
					Beautiful and Fully Isolated{"\n\n"}
				</Text>
			</Box>
			<Stack
				justify-content="center"
				margin="-16px -16px 120px -16px"
				md-width="100%"
				md-margin="-16px 0 120px 0"
				sm-flex-direction="column"
				sm-align-items="center"
			>
				{"    "}
				<StackItem
					width="311px"
					display="flex"
					min-width="309px"
					height="480px"
					border-radius="15px"
					lg-min-width="250px"
					lg-width="250px"
					md-padding="0 0 0 0"
					md-min-width="230px"
					md-width="230px"
					sm-width="300px"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"        "}
					<Image width="200px" height="150px" src="http://j-p-g.net/if/2020/09/09/0935839001599666933.png" />
					<Box width="200px" margin="0px 0px 28px 0px">
						<Text text-align="center" font="bold 12px/15px --fontFamily-googleMontserrat" margin="16px 0px 17px 0px">
							A4 PAPER{"\n\n"}
						</Text>
						<Text
							font="normal 300 14px/26px --fontFamily-googleArvo"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--h3Type"
							text-align="center"
						>
							Computer manufacturer Lenovo is in hot water this week after pre-installing{"\n\n"}
						</Text>
					</Box>
					<Box>
						<Link
							href="#"
							background="rgba(0, 0, 0, 0) url(http://j-p-g.net/if/2020/09/09/0155640001599666493.png) 0% 0% /contain no-repeat scroll padding-box"
							display="none"
							width="40px"
							height="40px"
						/>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					display="flex"
					min-width="309px"
					height="480px"
					width="311px"
					border-radius="15px"
					position="relative"
					lg-min-width="250px"
					lg-width="250px"
					md-padding="16px 0 0 0"
					md-min-width="250px"
					md-width="250px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						box-shadow="0px 15px 50px rgba(0, 0, 0, 0.1);"
						border-radius="15px"
					/>
					{"        "}
					<Image width="200px" height="150px" src="http://j-p-g.net/if/2020/09/09/0145377001599666493.png" />
					<Image
						width="77px"
						height="74px"
						src="http://j-p-g.net/if/2020/09/09/0810920001599672938.png"
						position="absolute"
						top="16px"
						right="15px"
						bottom="390px"
						left="219px"
						lg-bottom="390px"
						lg-height="86px"
						lg-left="172px"
						lg-right="76px"
						lg-top="4px"
						lg-width="63px"
						md-bottom="400px"
						md-height="72px"
						md-left="171px"
						md-right="54px"
						md-top="16px"
						md-width="86px"
					/>
					<Box width="200px" margin="0px 0px 28px 0px">
						<Text text-align="center" font="bold 12px/15px --fontFamily-googleMontserrat" margin="16px 0px 17px 0px">
							EYEDROPER{"\n\n"}
						</Text>
						<Text
							font="normal 300 14px/26px --fontFamily-googleArvo"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--h3Type"
							text-align="center"
						>
							It seems like hundreds of new iPhone apps pop up every week, but which{"  \n\n"}
						</Text>
					</Box>
					<Box>
						<Link
							href="#"
							background="rgba(0, 0, 0, 0) url(http://j-p-g.net/if/2020/09/09/0155640001599666493.png) 0% 0% /contain no-repeat scroll padding-box"
							display="block"
							width="40px"
							height="40px"
						/>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					display="flex"
					min-width="309px"
					height="480px"
					width="311px"
					border-radius="15px"
					lg-min-width="250px"
					lg-width="250px"
					md-padding="16px 0 0 0"
					md-min-width="230px"
					md-width="230px"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"        "}
					<Image width="200px" height="150px" src="http://j-p-g.net/if/2020/09/09/0922573001599666933.png" />
					<Box width="200px" margin="0px 0px 28px 0px">
						<Text text-align="center" font="bold 12px/15px --fontFamily-googleMontserrat" margin="16px 0px 17px 0px">
							CROWN{"\n\n"}
						</Text>
						<Text
							font="normal 300 14px/26px --fontFamily-googleArvo"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--h3Type"
							text-align="center"
						>
							Watching a movie on your smartphone can be pretty great, but who has the arm{"\n\n"}
						</Text>
					</Box>
					<Box>
						<Link
							href="#"
							background="rgba(0, 0, 0, 0) url(http://j-p-g.net/if/2020/09/09/0155640001599666493.png) 0% 0% /contain no-repeat scroll padding-box"
							display="none"
							width="40px"
							height="40px"
						/>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Box margin="0px 0px 60px 0px" width="50%" sm-width="100%">
				<Text font="500 36px/48px --fontFamily-googleArvo" text-align="center">
					News feed{"\n\n"}
				</Text>
				<Text
					font="300 12px/15px --fontFamily-googleMontserrat"
					letter-spacing="2.4px"
					color="--h3Type"
					text-align="center"
					sm-font="300 14px/26px --fontFamily-googleMontserrat"
				>
					Watching a movie on your smartphone can be pretty great, but who has the arm{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section>
			<Stack align-items="center" justify-content="center">
				{"    "}
				<StackItem display="flex" width="360px" height="470px" sm-width="360px">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box
						width="100%"
						height="50%"
						background="#FDDD37"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="8px 8px 0px 0px"
					>
						<Image width="206px" height="168px" src="http://j-p-g.net/if/2020/09/09/0380879001599667579.png" display="flex" />
					</Box>
					<Box
						width="100%"
						height="50%"
						border-radius=" 0px 0px 8px 8px"
						background="--color-bgsec3Itm"
						display="flex"
						flex-direction="column"
						justify-content="space-around"
					>
						<Box text-align="left" padding="0px 10px 0px 10px">
							<Text font="normal 300 22px/32px --fontFamily-googleArvo" margin="0px 0px 0px 0px" display="inline-block">
								The number of protons{"\n\n"}
							</Text>
							<Text font="14px/26px --fontFamily-googleOpenSans" color="--h3Type">
								Apple Inc has decided to launch the much awaited Apple Watch in the{" \n\n"}
							</Text>
						</Box>
						<Box padding="10px">
							<Stack>
								{"    "}
								<StackItem width="50%" display="flex">
									<Override slot="StackItemContent" align-items="center" />
									{"        "}
									<Image width="12px" height="12px" src="http://j-p-g.net/if/2020/09/09/0842417001599668069.jpg" margin="0px 11px 0px 0px" />
									<Text font="normal 600 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="--h3Type">
										1 JUNE 2015{"\n\n"}
									</Text>
									{"    "}
								</StackItem>
								{"    "}
								<StackItem width="50%" display="flex">
									<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
									{"        "}
									<Image width="12px" height="12px" src="http://j-p-g.net/if/2020/09/09/0841730001599668069.jpg" margin="0px 11px 0px 0px" />
									<Text font="normal 600 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="--h3Type">
										343{"\n\n"}
									</Text>
									{"    "}
								</StackItem>
							</Stack>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem display="flex" width="360px" height="470px" sm-width="360px">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box
						width="100%"
						height="50%"
						background="url(http://j-p-g.net/if/2020/09/09/0860448001599668356.png) 0% 0%/cover repeat"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="8px 8px 0px 0px"
					/>
					<Box
						width="100%"
						height="50%"
						border-radius=" 0px 0px 8px 8px"
						background="--color-bgsec3Itm"
						display="flex"
						flex-direction="column"
						justify-content="space-around"
					>
						<Box text-align="left" padding="0px 10px 0px 10px">
							<Text font="normal 300 22px/32px --fontFamily-googleArvo" margin="0px 0px 0px 0px" display="inline-block">
								Sport Stadium Birdview{" \n\n"}
							</Text>
							<Text font="14px/26px --fontFamily-googleOpenSans" color="--h3Type">
								Apple Inc has decided to launch the much awaited Apple Watch in the{" \n\n"}
							</Text>
						</Box>
						<Box padding="10px">
							<Stack>
								{"    "}
								<StackItem width="50%" display="flex">
									<Override slot="StackItemContent" align-items="center" />
									{"        "}
									<Image width="12px" height="12px" src="http://j-p-g.net/if/2020/09/09/0842417001599668069.jpg" margin="0px 11px 0px 0px" />
									<Text font="normal 600 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="--h3Type">
										1 JUNE 2015{"\n\n"}
									</Text>
									{"    "}
								</StackItem>
								{"    "}
								<StackItem width="50%" display="flex">
									<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
									{"        "}
									<Image width="12px" height="12px" src="http://j-p-g.net/if/2020/09/09/0841730001599668069.jpg" margin="0px 11px 0px 0px" />
									<Text font="normal 600 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="--h3Type">
										343{"\n\n"}
									</Text>
									{"    "}
								</StackItem>
							</Stack>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem display="flex" width="360px" height="470px" sm-width="360px">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box
						width="100%"
						height="50%"
						background="#B6E0FF"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="8px 8px 0px 0px"
					>
						<Image width="206px" height="168px" src="http://j-p-g.net/if/2020/09/09/0892779001599668356.png" display="flex" />
					</Box>
					<Box
						width="100%"
						height="50%"
						border-radius=" 0px 0px 8px 8px"
						background="#292929"
						display="flex"
						flex-direction="column"
						justify-content="space-around"
					>
						<Box text-align="left" padding="00px 10px 0px 10px">
							<Text font="normal 300 22px/32px --fontFamily-googleArvo" margin="0px 0px 0px 0px" display="inline-block" color="#fff">
								The number of protons{"\n\n"}
							</Text>
							<Text font="14px/26px --fontFamily-googleOpenSans" color="--h3Type">
								Startup founders often have a more casual or offbeat attitude in their dress{"\n\n"}
							</Text>
						</Box>
						<Box padding="10px">
							<Stack>
								{"    "}
								<StackItem width="50%" display="flex">
									<Override slot="StackItemContent" align-items="center" />
									{"        "}
									<Image width="12px" height="12px" src="http://j-p-g.net/if/2020/09/09/0842417001599668069.jpg" margin="0px 11px 0px 0px" />
									<Text font="normal 600 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="--h3Type">
										1 JUNE 2015{"\n\n"}
									</Text>
									{"    "}
								</StackItem>
								{"    "}
								<StackItem width="50%" display="flex">
									<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
									{"        "}
									<Image width="12px" height="12px" src="http://j-p-g.net/if/2020/09/09/0841730001599668069.jpg" margin="0px 11px 0px 0px" />
									<Text font="normal 600 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="--h3Type">
										343{"\n\n"}
									</Text>
									{"    "}
								</StackItem>
							</Stack>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					display="flex"
					width="360px"
					height="440px"
					padding="16px 0 16px 0"
					min-width="360px"
					min-height="440px"
					md-height="470px"
					sm-width="360px"
					sm-min-width="280px"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box
						width="100%"
						height="50%"
						background="linear-gradient(0deg, #FDEBD5, #FDEBD5)"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="8px 8px 0px 0px"
					>
						<Image width="206px" height="168px" src="http://j-p-g.net/if/2020/09/09/0913281001599668356.png" display="flex" />
					</Box>
					<Box
						width="100%"
						height="50%"
						border-radius=" 0px 0px 8px 8px"
						background="--color-bgsec3Itm"
						display="flex"
						flex-direction="column"
						justify-content="space-around"
					>
						<Box text-align="left" padding="00px 10px 0px 10px">
							<Text font="normal 300 22px/32px --fontFamily-googleArvo" margin="0px 0px 0px 0px" display="inline-block" color="--dark">
								The number of protons{"\n\n"}
							</Text>
							<Text font="14px/26px --fontFamily-googleOpenSans" color="--h3Type">
								Apple Inc has decided to launch the much awaited Apple Watch in the{"\n\n\n\n"}
							</Text>
						</Box>
						<Box padding="10px">
							<Stack>
								{"    "}
								<StackItem width="50%" display="flex">
									<Override slot="StackItemContent" align-items="center" />
									{"        "}
									<Image width="12px" height="12px" src="http://j-p-g.net/if/2020/09/09/0842417001599668069.jpg" margin="0px 11px 0px 0px" />
									<Text font="normal 600 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="--h3Type">
										1 JUNE 2015{"\n\n"}
									</Text>
									{"    "}
								</StackItem>
								{"    "}
								<StackItem width="50%" display="flex">
									<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
									{"        "}
									<Image width="12px" height="12px" src="http://j-p-g.net/if/2020/09/09/0841730001599668069.jpg" margin="0px 11px 0px 0px" />
									<Text font="normal 600 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="--h3Type">
										343{"\n\n"}
									</Text>
									{"    "}
								</StackItem>
							</Stack>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					display="flex"
					width="720px"
					height="440px"
					sm-width="360px"
					md-min-width="360px"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					{"        "}
					<Box
						width="100%"
						height="50%"
						background="#FFE1D5"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="8px 8px 0px 0px"
					>
						<Image width="480px" height="180px" src="http://j-p-g.net/if/2020/09/09/0877631001599668356.png" display="flex" />
					</Box>
					<Box
						width="100%"
						height="50%"
						border-radius=" 0px 0px 8px 8px"
						background="--color-bgsec3Itm"
						display="flex"
						flex-direction="column"
						justify-content="space-around"
					>
						<Box text-align="left" padding="00px 10px 0px 10px">
							<Text font="normal 300 22px/32px --fontFamily-googleArvo" margin="0px 0px 0px 0px" display="inline-block" color="--dark">
								Sport Stadium Birdview{"\n\n"}
							</Text>
							<Text font="14px/26px --fontFamily-googleOpenSans" color="--h3Type">
								Apple Inc has decided to launch the much awaited Apple Watch in the{"\n\n"}
							</Text>
						</Box>
						<Box padding="10px">
							<Stack>
								{"    "}
								<StackItem width="50%" display="flex">
									<Override slot="StackItemContent" align-items="center" />
									{"        "}
									<Image width="12px" height="12px" src="http://j-p-g.net/if/2020/09/09/0842417001599668069.jpg" margin="0px 11px 0px 0px" />
									<Text font="normal 600 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="--h3Type">
										1 JUNE 2015{"\n\n"}
									</Text>
									{"    "}
								</StackItem>
								{"    "}
								<StackItem width="50%" display="flex">
									<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
									{"        "}
									<Image width="12px" height="12px" src="http://j-p-g.net/if/2020/09/09/0841730001599668069.jpg" margin="0px 11px 0px 0px" />
									<Text font="normal 600 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="--h3Type">
										343{"\n\n"}
									</Text>
									{"    "}
								</StackItem>
							</Stack>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section height="100%" background="rgba(0, 0, 0, 0) url(http://j-p-g.net/if/2020/09/09/0072480001599669018.png) 0% 0% /cover no-repeat scroll padding-box">
			<Override
				slot="SectionContent"
				align-items="center"
				border-radius="6px"
				md-margin="0px 0 0px 0"
				md-width="100%"
				lg-width="100%"
			/>
			<Box
				margin="50px 0px 52px 0px"
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				md-height="200px"
				md-width="100%"
				sm-height="300px"
			>
				<Text font="500 36px/48px --fontFamily-googleArvo" text-align="center" margin="16px 0px 0 0px">
					Choose Pricing Plan{"\n\n"}
				</Text>
				<Text
					font="300 12px/15px --fontFamily-googleOpenSans"
					letter-spacing="2.4px"
					color="--h3Type"
					text-align="center"
					width="70%"
					sm-width="100%"
					sm-font="300 14px/26px --fontFamily-googleOpenSans"
					sm-color="#9FA3A7"
				>
					This new-found knowledge may then be used by engineers to create new tools and machines,{"\n\n"}
				</Text>
			</Box>
			<Stack
				align-items="center"
				justify-content="center"
				margin="-16px -16px 100px -16px"
				md-width="100%"
				md-min-width="100%"
				md-height="100%"
				md-margin="-16px 0 100px 0"
				sm-flex-direction="column"
			>
				{"    "}
				<StackItem
					display="flex"
					min-width="310px"
					height="400px"
					min-height="400px"
					margin="0px -32px 0px 0px"
					border-radius="6px"
					md-min-width="230px"
					md-padding="0 0 0 0"
					sm-width="260px"
					sm-margin="0px 0 20px 0px"
					lg-width="250px"
					lg-min-width="250px"
					md-width="230px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						background="#F8F8F8"
						border-radius="6px"
						md-height="349px"
					/>
					{"        "}
					<Text
						font=" bold 12px/15px --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#212121"
						letter-spacing="2.4px"
					>
						BASIC PLAN{"\n\n"}
					</Text>
					<Box margin="0px 0px 26px 0px" display="block" md-display="flex">
						<Text
							font="normal 300 38px/48px --fontFamily-googleArvo"
							display="inline-block"
							padding="0px 0px 0px 0px"
							margin="0px 0px 0 0px"
							text-align="left"
							md-margin="10px 0px 0 0px"
						>
							$
						</Text>
						<Text font="normal 300 74px/91px --fontFamily-googleArvo" margin="0px 0px 0px 0px" display="inline-block">
							29{"\n\n"}
						</Text>
						<Text
							font="normal 300 20px/25px --fontFamily-googleArvo"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--h3Type"
							md-align-self="flex-end"
						>
							/mo{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" flex-direction="column" margin="0px 0px 29px 0px" text-align="center">
						<Text font="300 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 11px 0px" display="inline-block">
							<Span font-size="14px">
								<Strong>
									5
								</Strong>
							</Span>
							{"  "}Projects{"\n\n"}
						</Text>
						<Text font="300 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 11px 0px" display="inline-block">
							<Span
								font="600 14px/17px --fontFamily-googleMontserrat"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								20{" "}
							</Span>
							{"\n"}Images{"\n\n"}
						</Text>
						<Text font="300 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block">
							<Span
								font="600 14px/17px --fontFamily-googleMontserrat"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								9/5{" "}
							</Span>
							{"\n"}Support{"\n\n"}
						</Text>
					</Box>
					<Link
						href="#"
						color="--dark"
						text-decoration-line="initial"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						width="172px"
						height="43px"
						display="flex"
						text-align="center"
						border-radius="100px"
						align-items="center"
						justify-content="center"
						border-width="1px"
						border-style="solid"
					>
						BUY NOW{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				<StackItem
					display="flex"
					width="0%"
					min-width="355px"
					height="455px"
					border-radius="6px"
					position="relative"
					md-min-width="294px"
					md-padding="0 16px 0 16px"
					sm-width="260px"
					sm-min-width="260px"
					sm-padding="0 0 0 0"
					lg-min-width="300px"
					md-width="294px"
					sm-margin="0px 0px 20px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						background="#fff"
						width="100%"
						border-radius="6px"
						md-height="443px"
					/>
					{"        "}
					<Image
						width="55px"
						height="10px"
						object-fit="cover"
						src="http://j-p-g.net/if/2020/09/09/0319187001599670265.jpg"
						position="absolute"
						top="43px"
						right="50px"
						sm-left="180px"
					/>
					<Text
						font=" bold 12px/15px --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#212121"
						letter-spacing="2.4"
					>
						TEAM PLAN{"\n\n"}
					</Text>
					<Box margin="0px 0px 26px 0px" display="block" md-display="flex">
						<Text
							font="normal 300 38px/48px --fontFamily-googleArvo"
							display="inline-block"
							padding="0px 0px 0px 0px"
							margin="0px 0px 0 0px"
							text-align="left"
							md-margin="10px 0px 0 0px"
						>
							$
						</Text>
						<Text font="normal 300 74px/91px --fontFamily-googleArvo" margin="0px 0px 0px 0px" display="inline-block">
							59{"\n\n"}
						</Text>
						<Text
							font="normal 300 20px/25px --fontFamily-googleArvo"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--h3Type"
							md-align-self="flex-end"
						>
							/mo{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" flex-direction="column" margin="0px 0px 29px 0px" text-align="center">
						<Text font="300 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 11px 0px" display="inline-block">
							<Span font="600 14px/17px --fontFamily-googleMontserrat">
								10
							</Span>
							{" \n"}Projects{"\n\n"}
						</Text>
						<Text font="300 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 11px 0px" display="inline-block">
							<Span font="600 14px/17px --fontFamily-googleMontserrat">
								40{" "}
							</Span>
							{"\n"}Images{"\n\n"}
						</Text>
						<Text font="300 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block">
							<Span font="600 14px/17px --fontFamily-googleMontserrat">
								12/7{" "}
							</Span>
							{"\n"}Support{"\n\n"}
						</Text>
					</Box>
					<Link
						href="#"
						color="#fff"
						text-decoration-line="initial"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						width="172px"
						height="43px"
						display="flex"
						text-align="center"
						border-radius="100px"
						align-items="center"
						justify-content="center"
						background="--color-btn"
					>
						BUY NOW{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				<StackItem
					display="flex"
					min-width="310px"
					height="400px"
					min-height="400px"
					width="100px"
					margin="0px 0px 0px -32px"
					border-radius="6px"
					md-min-width="230px"
					md-padding="0 0 0 0"
					sm-margin="0px 0px 0px 0"
					sm-min-width="260px"
					sm-width="260px"
					lg-width="250px"
					lg-min-width="250px"
					md-width="231px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						background="#F8F8F8"
						border-radius="6px"
						md-height="349px"
						md-min-width="230px"
						md-width="230px"
					/>
					{"        "}
					<Text
						font=" bold 12px/15px --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#212121"
						letter-spacing="2.4"
					>
						CORPORATE PLAN{"\n\n"}
					</Text>
					<Box margin="0px 0px 26px 0px" display="block" md-display="flex">
						<Text
							font="normal 300 38px/48px --fontFamily-googleArvo"
							display="inline-block"
							padding="0px 0px 0px 0px"
							margin="0px 0px 0 0px"
							text-align="left"
							md-padding="10px 0px 0px 0px"
						>
							$
						</Text>
						<Text font="normal 300 74px/91px --fontFamily-googleArvo" margin="0px 0px 0px 0px" display="inline-block">
							199{"\n\n"}
						</Text>
						<Text
							font="normal 300 20px/25px --fontFamily-googleArvo"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--h3Type"
							md-align-self="flex-end"
						>
							/mo{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" flex-direction="column" margin="0px 0px 29px 0px" text-align="center">
						<Text font="300 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 11px 0px" display="inline-block">
							<Span font="600 14px/17px --fontFamily-googleMontserrat">
								Unlimited
							</Span>
							{"\n\n  "}Projects{"\n\n"}
						</Text>
						<Text font="300 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 11px 0px" display="inline-block">
							<Span
								font="600 14px/17px --fontFamily-googleMontserrat"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								{"\n"}Unlimited{"\n\n "}
							</Span>
							{"\n"}Images{"\n\n"}
						</Text>
						<Text font="300 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block">
							<Span
								font="600 14px/17px --fontFamily-googleMontserrat"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								24/7{" "}
							</Span>
							{"\n"}Support{"\n\n"}
						</Text>
					</Box>
					<Link
						href="#"
						color="--dark"
						text-decoration-line="initial"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						width="172px"
						height="43px"
						display="flex"
						text-align="center"
						border-radius="100px"
						align-items="center"
						justify-content="center"
						border-width="1px"
						border-style="solid"
					>
						BUY NOW{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			height="400px"
			background="rgba(0, 0, 0, 0) url(http://j-p-g.net/if/2020/09/09/0814464001599670529.png) 0% 0% /cover no-repeat scroll padding-box"
			align-items="center"
			justify-content="center"
			sm-height="436px"
		>
			<Override slot="SectionContent" align-items="center" />
			<Box
				width="934px"
				height="170px"
				background="#fff"
				border-radius="8px"
				display="flex"
				align-items="center"
				justify-content="center"
				md-min-width="739px"
				md-width="739px"
				sm-width="280px"
				sm-height="250px"
				sm-min-width="280px"
				sm-flex-direction="column"
				sm-justify-content="center"
			>
				<Text
					font="300 24px/32px --fontFamily-googleArvo"
					margin="0px 28px 0px 0px"
					display="inline-block"
					sm-display="block"
					sm-text-align="center"
					sm-margin="0px 0 24px 0px"
				>
					Ready to get started?{"\n\n"}
				</Text>
				<Link
					href="#"
					color="--dark"
					text-decoration-line="initial"
					font="bold 12px/15px --fontFamily-googleMontserrat"
					letter-spacing="2.4px"
					width="172px"
					height="43px"
					display="flex"
					text-align="center"
					border-radius="100px"
					align-items="center"
					justify-content="center"
					border-width="2px"
					border-style="solid"
					margin="0px 14px 0px 0px"
					border-color="#EDEDED"
					sm-width="147px"
					sm-display="flex"
					sm-margin="0px 0 11px 0px"
				>
					READ FAQ{"\n\n"}
				</Link>
				<Link
					href="#"
					color="#fff"
					text-decoration-line="initial"
					font="bold 12px/15px --fontFamily-googleMontserrat"
					letter-spacing="2.4px"
					width="172px"
					height="43px"
					display="flex"
					text-align="center"
					border-radius="100px"
					align-items="center"
					justify-content="center"
					background="--color-btn"
					sm-width="147px"
				>
					REQUEST{"\n\n"}
				</Link>
			</Box>
		</Section>
		<Section sm-height="100%">
			<Stack
				align-items="center"
				justify-content="center"
				margin="88px -16px 122px -16px"
				md-margin="88px -16px 102px -16px"
				sm-height="100%"
			>
				{"    "}
				<StackItem
					width="30%"
					display="flex"
					position="relative"
					height="350px"
					margin="0px 130px 0px 0px"
					md-width="50%"
					md-margin="0px 0 0px 0px"
					md-height="300px"
					sm-width="60%"
					sm-margin="0px 0 10px 0px"
					lg-width="50%"
					lg-margin="0px 0 0px 0px"
					iphoneX-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image
						width="320px"
						height="237px"
						src="http://j-p-g.net/if/2020/09/09/0113051001599670854.png"
						sm-width="250px"
						sm-height="200px"
						sm-align-self="center"
						lg-align-self="center"
					/>
					<Box
						text-align="center"
						position="absolute"
						top="140px"
						sm-left="16px"
						sm-right="16px"
						sm-width="300px"
						sm-bottom="3px"
						sm-height="159px"
						sm-top="138px"
						iphoneX-left="23px"
						iphoneX-right="-24px"
						iphoneX-width="333px"
					>
						<Text font="36px/48px --fontFamily-googleArvo">
							Contact us{"\n\n"}
						</Text>
						<Text font="14px/26px --fontFamily-googleOpenSans" color="--h3Type">
							This new-found knowledge may then be used by engineers to create new tools and machines,{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem display="flex" flex-direction="column" sm-width="464px">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						box-shadow=" 0px 15px 50px rgba(0, 0, 0, 0.1)"
						border-radius="15px"
						sm-width="100%"
					/>
					<Box
						display="flex"
						flex-direction="column"
						margin="47px 50px 47px 50px"
						sm-width="360px"
						sm-margin="18px 0px 18px 0"
						sm-align-items="center"
					>
						<Input
							width="362px"
							height="50px"
							border-radius="4px"
							background="#F7F8F9"
							border-width="0px"
							margin="0px 0px 12px 0px"
							name="name"
							placeholder="Name"
							type="text"
							font="normal 500 14px/17px --fontFamily-googleMontserrat"
							sm-width="362px"
							sm-min-width="244px"
							iphoneX-width="244px"
						/>
						<Input
							height="50px"
							border-radius="4px"
							background="#F7F8F9"
							border-width="0px"
							margin="0px 0px 12px 0px"
							name="Phone"
							placeholder="Phone"
							type="number"
							font="normal 500 14px/17px --fontFamily-googleMontserrat"
							sm-min-width="244px"
							sm-width="362px"
							iphoneX-width="244px"
						/>
						<Input
							height="133px"
							border-radius="4px"
							background="#F7F8F9"
							border-width="0px"
							margin="0px 0px 45px 0px"
							as="textarea"
							type="text"
							name="message"
							placeholder="Message"
							font="normal 500 14px/17px --fontFamily-googleMontserrat"
							sm-min-width="244px"
							sm-width="362px"
							iphoneX-width="244px"
						/>
						<Link
							href="#"
							color="#fff"
							text-decoration-line="initial"
							font="bold 12px/15px --fontFamily-googleMontserrat"
							letter-spacing="2.4px"
							width="100%"
							height="43px"
							display="flex"
							text-align="center"
							border-radius="100px"
							align-items="center"
							justify-content="center"
							background="--color-btn"
							align-self="center"
							sm-width="100%"
							iphoneX-width="80%"
						>
							BUY NOW{"\n\n"}
						</Link>
					</Box>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section height="526px" background="rgba(0, 0, 0, 0) url(http://j-p-g.net/if/2020/09/09/0818716001599671565.png) 0% 0% /cover no-repeat scroll padding-box" justify-content="center">
			<Override slot="SectionContent" align-items="center" />
			<Box margin="50px 0px 60px 0px" width="50%" sm-width="100%">
				<Text font="500 36px/48px --fontFamily-googleArvo" text-align="center">
					Our contacts{"\n\n"}
				</Text>
				<Text font="300 14px/26px --fontFamily-googleMontserrat" letter-spacing="2.4px" color="#5C5C5C" text-align="center">
					This new-found knowledge may then be used by engineers to create new tools and machines,{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section
			background="#1C1C1C"
			height="333px"
			align-items="center"
			md-height="452px"
			sm-height="560px"
		>
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Stack
				width="100%"
				margin="-16px -16px 72px -16px"
				align-items="center"
				justify-content="center"
				md-flex-direction="column"
				md-margin="-16px -16px 60px -16px"
				sm-margin="-16px -16px 0 -16px"
			>
				{"    "}
				<StackItem width="25%" display="flex" md-margin="0px 0px 50px 0px">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Link href="#" text-decoration-line="initial" color="#fff" font="600 29px/35px --fontFamily-googleMontserrat">
						Land
						<Span
							color="--secondary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Em>
								ing
							</Em>
						</Span>
						{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%" md-margin="0px 0px 50px 0px">
					<Override slot="StackItemContent" align-items="center" justify-content="center" sm-flex-direction="column" />
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						margin="0px 40px 0px 0px"
						sm-margin="0px 0 29px 0px"
					>
						PRODUCTS
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						margin="0px 40px 0px 0px"
						sm-margin="0px 0 29px 0px"
					>
						ABOUT
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						margin="0px 40px 0px 0px"
						sm-margin="0px 0 29px 0px"
					>
						BLOG
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
					>
						CONTACT
					</Link>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						margin="4px 27px 0px 0px"
						width="20px"
						height="20px"
						background="url(https://svgshare.com/getbyhash/sha1-ZWFLZ7nymm+/jIj/yWYkO7X36Fg=) 0% 0%/contain no-repeat"
					/>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						margin="0px 27px 0px 0px"
						width="20px"
						height="20px"
						background="rgba(0, 0, 0, 0) url(https://svgshare.com/getbyhash/sha1-ymbQxjMiLlag3OpB5K93YDlDdjs=) 0% 0% /contain no-repeat scroll padding-box"
					/>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						margin="0px 27px 0px 0px"
						width="20px"
						height="20px"
						background="rgba(0, 0, 0, 0) url(https://svgshare.com/getbyhash/sha1-i3+aOdIy0QsHxk3oNXWyov9xPrc=) 0% 0% /contain no-repeat scroll padding-box"
					/>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffff"
						font="bold 12px/15px --fontFamily-googleMontserrat"
						letter-spacing="2.4px"
						width="20px"
						height="20px"
						background="rgba(0, 0, 0, 0) url(https://svgshare.com/getbyhash/sha1-oKkf8dQ69jRCAQFY+qkaRXWMifs=) 0% 0% /contain no-repeat scroll padding-box"
					/>
					{"        "}{"    "}
				</StackItem>
			</Stack>
			<Hr
				width="940px"
				border-width="1px"
				padding="0px 0px 0 0px"
				border-color="#4F4F4F"
				md-width="100%"
			/>
			<Text color="rgba(200, 200, 200, 0.5)" font="14px/22px --fontFamily-sans">
				© 2019 Landing. All rights reserved.{"\n\n"}
			</Text>
		</Section>
	</Theme>;
});