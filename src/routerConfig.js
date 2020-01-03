
const routerConfig = [
	// {
	// 	path: '/',
	// 	redirect: "/index"
	// },
	// {
	// 	name: 'index',
	// 	path: '/',
	// 	component:() => import ('./components/index')
	// },
	{
		path: '/',
		redirect: "/vueIndex"
	},
	{
		name: 'vueIndex',
		path: '/vueIndex',
		component: () => import('./components/Index/index')
	},
	{
		name: 'helloWorld',
		path: '/helloWorld',
		component: () => import('./components/Hello/HelloWorld')
	},
	{
		name: 'Index',
		path: '/index',
		component: () => import('./components/Common/index')
	},
	// 消息
	// 通讯录
	{
		name: 'Contact',
		path: '/contact',
		component: () => import('./components/Contact/index')
	},
	{
		name: 'ContactInfo',
		path: '/contact/contactInfo',
		component: () => import('./components/Contact/ContactInfo')
	},
	// 发现
	{
		name: 'Search',
		path: '/apply/search',
		component:() => import ('./components/Apply/Search/search')
	},
	// 个人
	{
		name: 'Person',
		path: '/person',
		component:() => import ('./components/Personal/index')
	},
	{
		name: 'PersonInfo',
		path: '/person/personInfo',
		component:() => import ('./components/Personal/PersonInfo/PersonInfo')
	},
	{
		name: 'Address',
		path: '/person/address',
		component:() => import ('./components/Personal/Address/address')
	},
	{
		name: 'AddressEdit',
		path: '/person/addressEdit',
		component:() => import ('./components/Personal/Address/AddressEdit')
	},
	{
		name: 'Collect',
		path: '/person/collect',
		component:() => import ('./components/Personal/Collect/collect')
	},
	{
		name: 'Photo',
		path: '/person/photo',
		component:() => import ('./components/Personal/Photo/photo')
	},
	{
		name: 'Discount',
		path: '/person/discount',
		component:() => import ('./components/Personal/DiscountCard/discount')
	},
	{
		name: 'Emoticon',
		path: '/person/emoticon',
		component:() => import ('./components/Personal/Emoticon/emoticon')
	},
	{
		name: 'Perfor',
		path: '/person/perfor',
		component:() => import ('./components/Personal/Perfor/perfor')
	},
	{
		name: 'Setting',
		path: '/person/setting',
		component:() => import ('./components/Personal/Setting/setting')
	},
]
export default routerConfig;