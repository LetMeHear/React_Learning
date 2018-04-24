import React from 'react';
import ReactDOM from 'react-dom';

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date()
//         };
//     }
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//     render() {
//         return (
//             <div>
// 				<h1>Hello World!</h1>
// 				<h2>It is {this.state.date.toLocaleString()}.</h2>
// 			</div>
//         );
//     }
// }
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
// 				<Clock />
// 				<Clock />
// 				<Clock />
// 			</div>
//         );
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root1')
// );


// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleon: true
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleon: !prevState.isToggleon
//         }));
//     }
//     render() {
//         return (
//             <button onClick={this.handleClick}>
// 			{this.state.isToggleon ? 'ON' : 'OFF'}
// 			</button>
//         );
//     }
// }
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root1')
// );

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
// ReactDOM.render(
//     <Greeting isLoggedIn={true} />,
//     document.getElementById('root1')
// );

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
// 		Login
// 		</button>
//     );
// }
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
// 		Logout
// 		</button>
//     );
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {
//             isLoggedIn: true
//         };
//     }
//     handleLoginClick() {
//         this.setState({
//             isLoggedIn: true
//         });
//     }
//     handleLogoutClick() {
//         this.setState({
//             isLoggedIn: false
//         });
//     }
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button = null;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }
//         return (
//             <div>
//     			<Greeting isLoggedIn={isLoggedIn} />
//     			{button}
//     		</div>
//         );
//     }
// }

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root1')
// );

// function WarningBanner(props) {
//     if (!props.warn) {
//         return null;
//     }
//     return (
//         <div>
// 		Warning!!
// 		</div>
//     );
// }
// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showWarning: true
//         }
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
//     handleToggleClick() {
//         this.setState(prevState => ({
//             showWarning: !prevState.showWarning
//         }));
//     }
//     render() {
//         return (
//             <div>
//     			<WarningBanner warn={this.state.showWarning} />
//     			<button onClick={this.handleToggleClick}>
//     				{this.state.showWarning ? 'Hide' : 'Show'}
//     			</button>
//     		</div>
//         );
//     }
// }
// ReactDOM.render(
//     <Page />,
//     document.getElementById('root1')
// );

// const number = [1, 2, 3, 4, 5];
// const present = number.map((numbers) => <li>{numbers}</li>
// );
// const doubled = number.map((dounum) => <li>{dounum * 2}</li>);
// ReactDOM.render(
//     <div>
//     	<ul>{present}</ul>
//     	<ul>{doubled}</ul>
//     </div>,
//     document.getElementById('root')
// );

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
//     return (
//         <ul>{listItems}</ul>
//     );
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );

// function ListItem(props) {
//     const value = props.value;
//     return <li>{value}</li>;
// }
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => 
// <ListItem key={number.toString()} value={number} />
//     );
//     return (
//         <ul>
// 			{listItems}
// 		</ul>
//     );
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );

// function Blog(props) {
//     const sidebar = (
//     <ul>
// 		{props.posts.map((post) => <li key={post.id}>
// 			{post.title}
// 			</li>
//     )}	
// 		</ul>
//     );
//     const content = props.posts.map((post) => <div key={post.id}>
// 		<h3>{post.title}</h3>
// 		<p>{post.content}</p>
// 		</div>
//     );
//     return (
//         <div>
// 			{sidebar}
// 			<hr />
// 			{content}
// 		</div>
//     );
// }
// const post = [
//     {
//         id: 1,
//         title: 'Hello World',
//         content: 'Welcome to learning React!'
//     },
//     {
//         id: 2,
//         title: 'Installation',
//         content: 'You can install React from npm.'
//     }
// ];
// ReactDOM.render(
//     <Blog posts={post} />,
//     document.getElementById('root')
// );

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         this.setState({
//             value: event.target.value
//         });
//     }
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
// 			<label>
// 				Name:
// 				<input type='text' value={this.state.value} onChange={this.handleChange} />
// 			</label>
// 			<input type='submit' value='Submit' />
// 			</form>
//         );
//     }
// }
// ReactDOM.render(
//     <NameForm />,
//     document.getElementById('root')
// );

// class FileInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(event) {
//         event.preventDefault();
//         alert(`Selected file - ${this.fileInput.files[0].name}`);
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
// 				<label>
// 					Upload file:
// 					<input type='file' ref={input => {
//                 this.fileInput = input
//             }} />
// 				</label>
// 				<br />
// 				<button type='submit'>Submit</button>
// 			</form>
//         );
//     }
// }
// ReactDOM.render(
//     <FileInput />,
//     document.getElementById('root')
// );

// class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2
//         };
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }
//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//         this.setState({
//             [name]: value
//         });
//     }
//     render() {
//         return (
//             <form>
// 				<label>
// 					Is going:
// 					<input name='isGoing' type='checkbox'
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
// 				</label>
// 				<br />
// 				<label>
// 					Number of Guests:
// 					<input name='numberOfGuests' type='number'
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
// 				</label>
// 			</form>
//         );
//     }
// }
// ReactDOM.render(
//     <Reservation />,
//     document.getElementById('root')
// );

// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
// }
// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             temperature: ''
//         };
//     }
//     handleChange(event) {
//         this.setState({
//             temperature: event.target.value
//         });
//     }
//     render() {
//         const temperature = this.state.temperature;
//         return (
//             <fieldset>
// 				<legend>
// 					Enter temperature in Celsius:
// 				</legend>
// 				<input value={temperature} onChange={this.handleChange} />
// 				<BoilingVerdict celsius={temperature} />
// 			</fieldset>
//         );
//     }
// }
// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
// );

// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// };
// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             temperature: ''
//         };
//     }
//     handleChange(event) {
//         this.props.onTemperatureChange(event.target.value);
//     }
//     render() {
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
// 				<legend>Enter temperature in {scaleNames[scale]}:</legend>
// 				<input value={temperature} onChange={this.handleChange} />
// 			</fieldset>
//         );
//     }
// }
// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahreheitChange = this.handleFahreheitChange.bind(this);
//         this.state = {
//             temperature: '',
//             scale: 'c'
//         };
//     }
//     handleCelsiusChange(temperature) {
//         this.setState({
//             scale: 'c',
//             temperature
//         });
//     }
//     handleFahreheitChange(temperature) {
//         this.setState({
//             scale: 'f',
//             temperature
//         });
//     }
//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//         const fahreheit = scale === 'c' ? tryConvert(temperature, toFahreheit) : temperature;
//         return (
//             <div>
// 			<TemperatureInput
//             scale='c'
//             temperature={celsius}
//             onTemperatureChange={this.handleCelsiusChange} />
// 			<TemperatureInput
//             scale='f'
//             temperature={fahreheit}
//             onTemperatureChange={this.handleFahreheitChange} />
// 			<BoilingVerdict
//             celsius={parseFloat(celsius)} />
// 			</div>
//         );
//     }
// }
// function toCelsius(fahreheit) {
//     return (fahreheit - 32) * 5 / 9;
// }
// function toFahreheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }
// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
// );

// function ProductRow(props) {
//     return (
//         <tr>
//         	<td>{props.name}</td>
//         	<td>{props.price}</td>
//         </tr>
//     );
// }
class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
				<th colSpan='2'>{this.props.category}</th>
			</tr>
        );
    }
}
class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{
                color: 'red'
            }}>{this.props.product.name}</span>;
        return (
            <tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
        );
    }
}
// function ProductCategoryRow(props) {
//     return (
//         <tr>
//         	<th colSpan='2'>{props.category}</th>
//         </tr>
//     );
// }
class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.product.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
        		<thead>
        			<tr>
        				<th>Name</th>
        				<th>Price</th>
        			</tr>
        		</thead>
        		<tbody>{rows}</tbody>
        	</table>
        );
    }
}
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }
    handleFilterTextInputChange(event) {
        this.props.onFilterTextInput(event.target.value);
    }
    handleInStockInputChange(event) {
        this.props.onInStockInput(event.target.checked);
    }
    render() {
        return (
            <form>
				<input
            type='text'
            placeholder='Search...'
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange} />
				<br />
				<input
            type='checkbox'
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange} />
				Only show products in stock
			</form>
        );
    }
}
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }
    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    handleInStockInput(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        });
    }
    render() {
        return (
            <div>
				<SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextInput={this.handleFilterTextInput}
            onInStockInput={this.handleInStockInput} />
				<ProductTable
            product={this.props.product}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly} />
			</div>
        );
    }
}
var product = [
    {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
    },
    {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
    },
    {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
    },
    {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
    },
    {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
    },
    {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
    }
];
ReactDOM.render(
    <FilterableProductTable product={product}/>,
    document.getElementById('root')
);


























