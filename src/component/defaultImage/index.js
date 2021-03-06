import Loading from "../loading";
export default class DefaultImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src ? this.props.src : require("../../img/default.png"),
      loading: true
    };
  }

  handleImageLoaded() {
    //加载完毕
    this.setState({ loading: false });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ src: nextProps.src });
  }

  handleImageErrored() {
    //加载失败
    this.setState({
      src: require("../../img/default.png"),
      loading: false
    });
  }

  render() {
    let { src, loading } = this.state;
    const { className, alt}=this.props;
    return (
      <img
        alt={alt}
        className={className}
        src={src}
        onLoad={this.handleImageLoaded.bind(this)}
        onError={this.handleImageErrored.bind(this)}
      />
    );
  }
}
