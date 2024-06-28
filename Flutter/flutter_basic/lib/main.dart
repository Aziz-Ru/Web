import 'package:flutter/material.dart';
import 'package:flutter_basic/widget/buttonwidget.dart';
import 'package:flutter_basic/widget/textfield.dart';
import 'package:flutter_basic/widget/textwidget.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.blueGrey,
          title: const Text('Currency Converter'),
          centerTitle: true,
          // actions: [const Icon(Icons.more_vert)],
        ),
        body: Container(
          color: Colors.blueGrey,
          child: const Column(
            children: [TextWidget(), TextFieldWidget(), ButtonWidget()],
          ),
        )); // This trailing comma makes auto-formatting nicer for build methods.
  }
}